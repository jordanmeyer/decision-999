import AppKit
let font=NSFont(name:"Arial-BoldMT",size:12)!
let root="/private/tmp/madness-checklist-normalized"
var widest:[String:(String,CGFloat)] = [:]
for year in 2016...2026 {
 let data=try Data(contentsOf:URL(fileURLWithPath:"\(root)/\(year).json"))
 let json=try JSONSerialization.jsonObject(with:data) as! [String:Any]
 let teams=json["teams"] as! [[String:Any]]
 for field in ["bracketName","superShortName"] {
  for team in teams {
   let label=team[field] as! String
   let width=(label as NSString).size(withAttributes:[.font:font]).width
   if width > (widest[field]?.1 ?? 0) {widest[field]=(label,width)}
   if width > (field=="bracketName" ? 102 : 48) {print("OVER \(year) \(team["id"]!) \(field) \(label): \(width)")}
  }
 }
 let slots=Dictionary(grouping:teams,by:{"\($0["region"]!)-\($0["bracketSlot"]!)"})
 for pair in slots.values where pair.count==2 {
  let label=pair.map{$0["superShortName"] as! String}.joined(separator:" / ")
  let width=(label as NSString).size(withAttributes:[.font:font]).width
  if width > (widest["paired"]?.1 ?? 0) {widest["paired"]=(label,width)}
  if width > 102 { print("OVER \(year) paired \(label): \(width)")}
 }
}
print(widest)
