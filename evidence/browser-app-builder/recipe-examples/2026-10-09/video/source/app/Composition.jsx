import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { dimensions, sceneIndex, sceneStarts } from './model.js';
import { fitText } from './text-layout.js';

const palettes = { navy: { bg: '#012169', ink: '#f5f1e7', soft: '#b7cce3', accent: '#d5a078', tray: '#e4ccb2', edge: '#be916f' }, ivory: { bg: '#f5f1e7', ink: '#012169', soft: '#4c6280', accent: '#9b4f29', tray: '#d8b994', edge: '#b68e69' } };
function Copy({ text, x, y, w, h, size = 44, min = 18, family = 'Arial', weight = 400, color, ...rest }) {
  const layout = fitText(text, w, h, { size, min, family, weight });
  return <div data-copy={text} style={{ position: 'absolute', left: x, top: y, width: w, height: h, fontFamily: family, fontWeight: weight, color, fontSize: layout.fontSize, lineHeight: `${layout.lineHeight}px`, whiteSpace: 'pre', overflow: 'visible' }} {...rest}>{layout.lines.map((line, i) => <div key={i}>{line}</div>)}</div>;
}
export function Tray({ colors, style }) {
  return <svg viewBox="0 0 500 380" style={style} aria-hidden="true">
    <ellipse cx="260" cy="303" rx="197" ry="36" fill={colors.soft} opacity="0.13" />
    <polygon points="70,202 272,116 462,213 259,321" fill={colors.edge} />
    <polygon points="96,157 271,83 434,169 259,261" fill={colors.tray} />
    <polygon points="70,202 96,157 259,261 259,321" fill="#b58d69" />
    <polygon points="259,261 434,169 462,213 259,321" fill="#d2ab85" />
    <polygon points="96,157 117,181 271,116 271,83" fill="#f1deca" />
    <polygon points="271,83 271,116 414,193 434,169" fill="#c8a07b" />
    <polygon points="117,181 271,116 414,193 259,277" fill="#ead4b9" />
    <polygon points="182,143 259,109 323,147 244,183" fill="#fbf6ed" stroke="#c7b8a6" strokeWidth="2" />
    <path d="M197 148 L249 126 M210 157 L266 133 M224 166 L280 141" stroke="#9caab5" strokeWidth="3" />
    <path d="M295 141 L366 217" stroke="#012169" strokeWidth="13" strokeLinecap="round" />
    <path d="M313 132 L384 208" stroke="#00539b" strokeWidth="11" strokeLinecap="round" />
    <path d="M366 217 L374 228 M384 208 L393 219" stroke="#806754" strokeWidth="5" />
    <circle cx="229" cy="214" r="24" fill="none" stroke="#987452" strokeWidth="7" />
    <circle cx="236" cy="218" r="24" fill="none" stroke="#c5a67e" strokeWidth="5" />
    <path d="M70 202 L96 157 M434 169 L462 213 M259 261 L259 321" stroke="#826144" strokeWidth="2" opacity=".65" />
  </svg>;
}
export function FoldlineComposition({ config }) {
  const frame = useCurrentFrame();
  const { width, height } = dimensions(config);
  const portrait = config.format === 'portrait';
  const scene = sceneIndex(config, frame);
  const local = frame - sceneStarts(config)[scene];
  const colors = palettes[config.palette];
  const entrance = interpolate(local, [0, 16], [14, 0], { extrapolateRight: 'clamp' });
  const common = { color: colors.ink };
  const art = (x, y, w, h) => <Tray colors={colors} style={{ position: 'absolute', left: x, top: y + entrance, width: w, height: h }} />;
  const story = config.template === 'story';
  return <AbsoluteFill style={{ backgroundColor: colors.bg, fontFamily: 'Arial', color: colors.ink, overflow: 'hidden' }}>
    <div style={{ position: 'absolute', left: 42, top: 31, width: width - 84, height: 1, backgroundColor: colors.soft, opacity: .45 }} />
    <Copy text={config.product} x={42} y={48} w={portrait ? 300 : 620} h={42} size={24} min={18} weight={700} {...common} />
    <div style={{ position: 'absolute', right: 42, top: 53, color: colors.soft, fontSize: 12, letterSpacing: 1 }}>PRODUCT CONCEPT</div>
    {story && scene === 0 && <>
      <Copy text={config.headline} x={48} y={portrait ? 152 : 150} w={portrait ? 444 : 432} h={portrait ? 225 : 275} size={portrait ? 48 : 54} min={25} family="Georgia" {...common} />
      {art(portrait ? 20 : 490, portrait ? 440 : 120, portrait ? 500 : 430, portrait ? 380 : 326)}
      <div style={{ position: 'absolute', left: 48, bottom: portrait ? 105 : 62, fontSize: 14, color: colors.soft, letterSpacing: 1.5 }}>A FICTIONAL DESK ORGANIZER</div>
    </>}
    {story && scene === 1 && <>
      {art(portrait ? 80 : 15, portrait ? 106 : 138, portrait ? 380 : 440, portrait ? 260 : 334)}
      {config.benefits.map((benefit, i) => <React.Fragment key={i}>
        <div style={{ position: 'absolute', left: portrait ? 48 : 488, top: (portrait ? 380 : 132) + i * (portrait ? 158 : 114), fontSize: 12, color: colors.accent, letterSpacing: 2 }}>{`0${i + 1} / CONCEPT FEATURE`}</div>
        <Copy text={benefit} x={portrait ? 48 : 488} y={(portrait ? 409 : 159) + i * (portrait ? 158 : 114)} w={portrait ? 444 : 424} h={portrait ? 113 : 77} size={portrait ? 32 : 30} min={18} {...common} />
      </React.Fragment>)}
    </>}
    {story && scene === 2 && <>
      {art(portrait ? 20 : 465, portrait ? 202 : 119, portrait ? 500 : 450, portrait ? 380 : 342)}
      <div style={{ position: 'absolute', left: 48, top: portrait ? 629 : 157, fontSize: 12, color: colors.accent, letterSpacing: 2 }}>START WITH A SMALL IDEA.</div>
      <Copy text={config.cta} x={48} y={portrait ? 662 : 194} w={portrait ? 444 : 440} h={portrait ? 177 : 240} size={48} min={24} family="Georgia" {...common} />
    </>}
    {!story && <>
      <Copy text={config.headline} x={48} y={portrait ? 119 : 102} w={portrait ? 444 : 864} h={portrait ? 115 : 60} size={portrait ? 29 : 27} min={20} family="Georgia" color={colors.soft} />
      {art(portrait ? 40 : 518, portrait ? 244 : 153, portrait ? 460 : 395, portrait ? 312 : 290)}
      <div style={{ position: 'absolute', left: 48, top: portrait ? 577 : 208, fontSize: 13, color: colors.accent, letterSpacing: 2 }}>{`0${scene + 1} / CONCEPT FEATURE`}</div>
      <Copy text={config.benefits[scene]} x={48} y={portrait ? 613 : 244} w={portrait ? 444 : 441} h={portrait ? 160 : 158} size={42} min={24} {...common} />
      {scene === 2 && <Copy text={config.cta} x={48} y={portrait ? 823 : 450} w={portrait ? 444 : 864} h={portrait ? 81 : 48} size={24} min={18} weight={700} {...common} />}
    </>}
    <div style={{ position: 'absolute', left: 48, bottom: 27, display: 'flex', gap: 8 }}>{[0, 1, 2].map(i => <div key={i} style={{ width: i === scene ? 34 : 12, height: 3, backgroundColor: i === scene ? colors.accent : colors.soft, opacity: i === scene ? 1 : .45 }} />)}</div>
    <div style={{ position: 'absolute', right: 42, bottom: 20, color: colors.soft, fontSize: 11 }}>FOLDLINE STUDIO · CONCEPT VISUALIZATION</div>
  </AbsoluteFill>;
}
