let context;
// Use local browser font metrics; the same layout function drives preview and export.
export function fitText(text, width, height, { size = 44, min = 18, family = 'Arial', weight = 400 } = {}) {
  context ||= document.createElement('canvas').getContext('2d');
  const units = [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text.trim())].map(x => x.segment);
  for (let fontSize = size; fontSize >= min; fontSize--) {
    context.font = `${weight} ${fontSize}px ${family}`;
    const lines = [];
    let line = '';
    for (const unit of units) {
      if (line && context.measureText(line + unit).width > width) {
        const split = line.lastIndexOf(' ');
        if (split > line.length / 2) { lines.push(line.slice(0, split)); line = line.slice(split + 1) + unit; }
        else { lines.push(line.trimEnd()); line = unit.trimStart(); }
      } else line += unit;
    }
    if (line) lines.push(line.trimEnd());
    const lineHeight = fontSize * 1.14;
    if (lines.length * lineHeight <= height) return { lines, fontSize, lineHeight };
  }
  throw Error('Text does not fit the controlled template. Shorten the copy.');
}
