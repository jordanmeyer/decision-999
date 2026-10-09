export const defaults = { product: 'Foldline', headline: 'A little order. A little more room.', benefits: ['A place for the small things', 'Folds flat between study sessions', 'One calm corner of your desk'], cta: 'Explore the Foldline concept', template: 'story', format: 'landscape', seconds: 12, palette: 'navy' };
export const limits = { product: 24, headline: 54, benefit0: 56, benefit1: 56, benefit2: 56, cta: 48 };
export const count = text => Array.from(text).length;
export const dimensions = config => config.format === 'portrait' ? { width: 540, height: 960 } : { width: 960, height: 540 };
export const frames = config => config.seconds * 30;
export function sceneStarts(config) { const n = frames(config); return config.template === 'story' ? [0, n / 4, n * 3 / 4] : [0, n / 3, n * 2 / 3]; }
export function sceneIndex(config, frame) { const starts = sceneStarts(config); return frame >= starts[2] ? 2 : frame >= starts[1] ? 1 : 0; }
export function validate(config) {
  const fields = { product: config.product, headline: config.headline, ...Object.fromEntries(config.benefits.map((b, i) => [`benefit${i}`, b])), cta: config.cta };
  const errors = [];
  for (const [key, value] of Object.entries(fields)) {
    if (!value.trim()) errors.push({ key, message: 'Enter some text.' });
    else if (count(value) > limits[key]) errors.push({ key, message: `Use no more than ${limits[key]} Unicode characters.` });
    else if (/\p{Cc}/u.test(value)) errors.push({ key, message: 'Use a single line of printable text.' });
  }
  for (const [key, values] of Object.entries({ template: ['story', 'cards'], format: ['landscape', 'portrait'], seconds: [12, 18], palette: ['navy', 'ivory'] })) if (!values.includes(config[key])) errors.push({ key, message: 'Choose a supported option.' });
  return errors;
}
export function filename(config) {
  const name = config.product.normalize('NFKD').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').slice(0, 32).toLowerCase() || 'product-concept';
  return `${name}-${config.template}-${config.format}-${config.seconds}s.mp4`;
}
