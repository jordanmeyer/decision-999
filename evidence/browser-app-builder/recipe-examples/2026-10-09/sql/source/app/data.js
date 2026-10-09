export const schemas = {
  orders: {order_id:'VARCHAR',ordered_on:'DATE',region:'VARCHAR'},
  products: {product_id:'VARCHAR',product:'VARCHAR',category:'VARCHAR'},
  line_items: {line_id:'VARCHAR',order_id:'VARCHAR',product_id:'VARCHAR',ordered_units:'INTEGER',unit_price_cents:'BIGINT'},
  shipment_lines: {shipment_id:'VARCHAR',line_id:'VARCHAR',shipped_on:'DATE',shipped_units:'INTEGER'}
};
export const descriptions = {
  orders: 'One row per order. Region belongs to the order, not a shipment.',
  products: 'One row per product. Selling price is recorded on each order line.',
  line_items: 'One row per order line. Unit prices are USD cents; no tax or shipping.',
  shipment_lines: 'One row per shipment event. Several events can fulfill one line.'
};
export function dataset(size='tiny') {
  if(size==='tiny') return {
    orders:[{order_id:'O1',ordered_on:'2026-01-05',region:'East'},{order_id:'O2',ordered_on:'2026-01-06',region:'West'},{order_id:'O3',ordered_on:'2026-01-07',region:'West'}],
    products:[{product_id:'P1',product:'Notebook',category:'Paper'},{product_id:'P2',product:'Lamp',category:'Lighting'}],
    line_items:[['A','O1','P1',10,2000],['B','O1','P2',5,3000],['C','O2','P1',4,2500],['D','O3','P2',2,5000]].map(([line_id,order_id,product_id,ordered_units,unit_price_cents])=>({line_id,order_id,product_id,ordered_units,unit_price_cents})),
    shipment_lines:[['S1','A',3],['S2','A',2],['S3','B',5],['S4','C',1]].map(([shipment_id,line_id,shipped_units],i)=>({shipment_id,line_id,shipped_on:`2026-01-${String(i+8).padStart(2,'0')}`,shipped_units}))
  };
  const names=['Notebook','Desk lamp','Pen tray','Cable dock','Book stand','Desk mat','Pencil cup','Memo board','File holder','Laptop riser','Task timer','Paper sorter'];
  const products=names.map((product,i)=>({product_id:`P${i+1}`,product,category:['Paper','Lighting','Organization'][i%3]}));
  const orders=[],line_items=[],shipment_lines=[];
  const date=n=>new Date(Date.UTC(2026,0,1+n)).toISOString().slice(0,10);
  for(let i=0;i<2400;i++){
    const regionIndex=i%4,order_id=`O${i+1}`,orderDay=Math.floor(i/30);
    orders.push({order_id,ordered_on:date(orderDay),region:['East','West','Central','South'][regionIndex]});
    for(let j=0;j<3;j++){
      const n=i*3+j,productIndex=(i*7+j*3)%12,line_id=`L${n+1}`,ordered_units=4+(n*11)%37,unit_price_cents=1200+productIndex*475+(i%5)*25;
      line_items.push({line_id,order_id,product_id:products[productIndex].product_id,ordered_units,unit_price_cents});
      const status=(Math.floor(i/4)+j+productIndex)%10;
      const fulfilled=status < [1,3,2,1][regionIndex] ? 0 : status < [4,7,5,3][regionIndex] ? Math.floor(ordered_units/2) : ordered_units;
      if(fulfilled){
        const first=fulfilled>1&&n%3!==0?Math.floor(fulfilled/2):fulfilled;
        shipment_lines.push({shipment_id:`S${shipment_lines.length+1}`,line_id,shipped_on:date(orderDay+2+(n%4)),shipped_units:first});
        if(first<fulfilled)shipment_lines.push({shipment_id:`S${shipment_lines.length+1}`,line_id,shipped_on:date(orderDay+7),shipped_units:fulfilled-first});
      }
    }
  }
  return {orders,products,line_items,shipment_lines};
}
export function csv(rows,columns) {
  const cell=value=>'"'+String(value).replaceAll('"','""')+'"';
  return columns.join(',')+'\n'+rows.map(row=>columns.map(key=>cell(row[key])).join(',')).join('\n');
}
// Independent arithmetic reference, never used to produce the SQL result table.
export function reference(data) {
  const shipped=new Map();for(const s of data.shipment_lines)shipped.set(s.line_id,(shipped.get(s.line_id)||0)+s.shipped_units);
  let gross=0n,fulfilled=0n,units=0,shippedUnits=0;
  for(const l of data.line_items){const qty=shipped.get(l.line_id)||0;gross+=BigInt(l.ordered_units)*BigInt(l.unit_price_cents);fulfilled+=BigInt(qty)*BigInt(l.unit_price_cents);units+=l.ordered_units;shippedUnits+=qty;}
  return {gross,shipped:fulfilled,outstanding:gross-fulfilled,units,shippedUnits};
}
