import { canRenderMediaOnWeb, renderMediaOnWeb } from '@remotion/web-renderer';
import { FoldlineComposition } from './Composition.jsx';
import { dimensions, frames, validate } from './model.js';
export function composition(config) { return { id: 'foldline-concept', component: FoldlineComposition, ...dimensions(config), fps: 30, durationInFrames: frames(config) }; }
export async function capability(config) {
  return canRenderMediaOnWeb({ ...dimensions(config), container: 'mp4', videoCodec: 'h264', outputTarget: 'arraybuffer', muted: true });
}
export async function exportVideo(config, signal, onProgress) {
  if (validate(config).length) throw Error('Correct the copy and settings before rendering.');
  const support = await capability(config);
  if (signal.aborted) throw new DOMException('Render cancelled.', 'AbortError');
  if (!support.canRender) throw Error(support.issues.map(issue => issue.message).join(' ') || 'This browser cannot encode the selected H.264 video.');
  const rendered = await renderMediaOnWeb({ composition: composition(config), inputProps: { config }, container: 'mp4', videoCodec: 'h264', outputTarget: 'arraybuffer', licenseKey: 'free-license', isProduction: import.meta.env.PROD, signal, onProgress, pageResponsiveness: 'high', muted: true });
  const blob = await rendered.getBlob();
  if (signal.aborted) throw new DOMException('Render cancelled.', 'AbortError');
  return blob;
}
