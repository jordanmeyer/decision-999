import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from '@remotion/player';
import { FoldlineComposition } from './Composition.jsx';
import { defaults, limits, count, dimensions, frames, sceneStarts, sceneIndex, validate, filename } from './model.js';
import { capability, exportVideo } from './export.js';
import './style.css';

function App() {
  const [config, setConfig] = useState(structuredClone(defaults));
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [support, setSupport] = useState(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [encoded, setEncoded] = useState(0);
  const [status, setStatus] = useState('Your concept is ready to preview.');
  const [output, setOutput] = useState(null);
  const [mediaInfo, setMediaInfo] = useState('');
  const player = useRef(null);
  const job = useRef(null);
  const objectUrl = useRef(null);
  const errors = validate(config);
  const valid = !errors.length;
  const size = dimensions(config);
  const total = frames(config);
  const starts = sceneStarts(config);
  const inputProps = useMemo(() => ({ config }), [config]);
  const fields = [ ['product', 'Product name', config.product], ['headline', 'Opening headline', config.headline], ...config.benefits.map((b, i) => [`benefit${i}`, `Concept benefit ${i + 1}`, b]), ['cta', 'Closing call to action', config.cta] ];
  const labels = config.template === 'story' ? ['Introduction', 'Three benefits', 'Closing invitation'] : ['Benefit one', 'Benefit two', 'Benefit three + CTA'];

  function clearOutput() {
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = null;
    setOutput(null);
    setMediaInfo('');
  }
  function cancel(reason = 'Render cancelled. You can retry when stopping is complete.') {
    if (!job.current) return;
    job.current.reason = reason;
    job.current.controller.abort();
    setStatus('Stopping the current render…');
  }
  function edit(next) {
    cancel('Render cancelled after an edit. Render the updated concept when ready.');
    clearOutput();
    player.current?.pause();
    setConfig(next);
    setFrame(0);
    setPlaying(false);
    if (!job.current) setStatus('Draft changed. Preview and the next export use these settings.');
  }
  function setText(key, value) {
    if (key.startsWith('benefit')) {
      const benefits = [...config.benefits]; benefits[Number(key.slice(-1))] = value;
      edit({ ...config, benefits });
    } else edit({ ...config, [key]: value });
  }
  function seek(value) { player.current?.pause(); player.current?.seekTo(value); setPlaying(false); setFrame(value); }

  useEffect(() => {
    let current = true;
    setSupport(null);
    capability(config).then(result => { if (current) setSupport({ ...result, format: config.format }); }).catch(error => { if (current) setSupport({ canRender: false, format: config.format, issues: [{ message: error.message }] }); });
    return () => { current = false; };
  }, [config.format]);
  useEffect(() => {
    const p = player.current;
    if (!p) return;
    const update = event => setFrame(event.detail.frame);
    const play = () => setPlaying(true);
    const pause = () => setPlaying(false);
    p.addEventListener('frameupdate', update); p.addEventListener('play', play); p.addEventListener('pause', pause); p.addEventListener('ended', pause);
    return () => { p.removeEventListener('frameupdate', update); p.removeEventListener('play', play); p.removeEventListener('pause', pause); p.removeEventListener('ended', pause); };
  }, [valid, config.format, config.template, config.seconds]);
  useEffect(() => { player.current?.seekTo(0); }, [config]);
  useEffect(() => {
    const leaving = event => {
      player.current?.pause();
      if (job.current) cancel('Render cancelled by navigation. Render again when ready.');
      if (!event.persisted && objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    };
    window.addEventListener('pagehide', leaving);
    return () => { window.removeEventListener('pagehide', leaving); job.current?.controller.abort(); if (objectUrl.current) URL.revokeObjectURL(objectUrl.current); };
  }, []);

  async function render() {
    if (!valid || job.current || !support?.canRender || support.format !== config.format) return;
    clearOutput();
    player.current?.pause();
    setPlaying(false);
    const current = { controller: new AbortController(), snapshot: structuredClone(config), reason: 'Render cancelled. Retry when ready.' };
    job.current = current;
    setBusy(true); setProgress(0); setEncoded(0); setStatus('Preparing a silent MP4 from this draft…');
    try {
      const blob = await exportVideo(current.snapshot, current.controller.signal, p => {
        if (job.current !== current || current.controller.signal.aborted) return;
        setProgress(p.progress); setEncoded(p.encodedFrames); setStatus(`Rendering ${p.encodedFrames} of ${frames(current.snapshot)} frames…`);
      });
      if (current.controller.signal.aborted) return;
      const url = URL.createObjectURL(blob);
      objectUrl.current = url;
      setOutput({ url, config: current.snapshot, bytes: blob.size });
      setProgress(1); setStatus('MP4 rendered. Play the exported file below, then download it.');
    } catch (error) {
      setStatus(current.controller.signal.aborted ? current.reason : `Export failed: ${error.message} Try again or use another browser with H.264 WebCodecs support.`);
    } finally {
      if (current.controller.signal.aborted) setStatus(current.reason);
      if (job.current === current) job.current = null;
      setBusy(false);
    }
  }

  return <><a className="skip" href="#editor">Skip to video editor</a><header className="masthead"><a className="wordmark" href="#top">FOLDLINE <span>STUDIO</span><small>A SMALL PRODUCT. A CLEAR STORY.</small></a><div className="edition">CONCEPT VIDEO WORKSHOP<br />LOCAL PREVIEW · SILENT MP4</div></header><main id="top"><section className="intro"><div><p className="eyebrow">FROM A PRODUCT IDEA TO A PLAYABLE PITCH</p><h1>Give the concept<br /><em>a little motion.</em></h1></div><p className="intro-copy">Shape a short story for a fictional desk organizer. Edit the words, inspect each scene, and export the same composition as a silent video.</p></section><div className="studio-grid"><section className="editor-panel" id="editor" aria-labelledby="editor-title"><div className="section-top"><div><p className="eyebrow">01 / THE CREATIVE BRIEF</p><h2 id="editor-title">Make it yours.</h2></div><button className="text-button" type="button" onClick={() => edit(structuredClone(defaults))}>Reset</button></div><form autoComplete="off" onSubmit={e => e.preventDefault()}><fieldset className="settings"><legend>Format & pacing</legend><div className="settings-grid"><label>Template<select value={config.template} onChange={e => edit({ ...config, template: e.target.value })}><option value="story">Product story</option><option value="cards">Benefit cards</option></select></label><label>Orientation<select value={config.format} onChange={e => edit({ ...config, format: e.target.value })}><option value="landscape">Landscape · 960×540</option><option value="portrait">Portrait · 540×960</option></select></label><label>Length<select value={config.seconds} onChange={e => edit({ ...config, seconds: Number(e.target.value) })}><option value="12">12 seconds</option><option value="18">18 seconds</option></select></label><label>Color treatment<select value={config.palette} onChange={e => edit({ ...config, palette: e.target.value })}><option value="navy">Navy / ivory</option><option value="ivory">Ivory / navy</option></select></label></div></fieldset><fieldset className="copy-fields"><legend>The words on screen</legend><p className="hint">Concept claims for class discussion, not validated performance. Limits count Unicode code points.</p>{fields.map(([key, label, value]) => {
    const error = errors.find(e => e.key === key);
    return <div className="copy-field" key={key}><div className="label-row"><label htmlFor={key}>{label}</label><span className={error ? 'over' : ''} id={`${key}-count`}>{count(value)} / {limits[key]}</span></div><textarea id={key} rows={key === 'product' ? 1 : 2} value={value} aria-invalid={Boolean(error)} aria-describedby={`${key}-count${error ? ` ${key}-error` : ''}`} onChange={e => setText(key, e.target.value)} />{error && <p className="field-error" id={`${key}-error`}>{error.message}</p>}</div>;
  })}</fieldset></form><p className="editor-footnote">The tray, pens and cards are authored vector artwork. No photos, uploads, accounts or remote assets.</p></section><div className="preview-column"><section className="preview-panel" aria-labelledby="preview-title"><div className="section-top"><div><p className="eyebrow">02 / WATCH THE STORY TAKE SHAPE</p><h2 id="preview-title">The exact composition.</h2></div><span className="spec-badge">{size.width}×{size.height} · 30 fps</span></div><div className={`player-stage ${config.format}`}>{valid ? <Player ref={player} key={`${config.format}-${config.template}-${config.seconds}`} component={FoldlineComposition} acknowledgeRemotionLicense inputProps={inputProps} durationInFrames={total} fps={30} compositionWidth={size.width} compositionHeight={size.height} controls={false} autoPlay={false} loop={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} style={{ width: '100%', height: '100%' }} /> : <div className="invalid-preview"><h3>Refine the copy to preview.</h3><p>Correct {errors.length} highlighted {errors.length === 1 ? 'field' : 'fields'}. No obsolete preview or download is shown.</p></div>}</div><div className="playback"><button type="button" className="play-button" disabled={!valid} onClick={() => playing ? player.current?.pause() : player.current?.play()}>{playing ? 'Pause preview' : 'Play preview'}</button><label className="scrubber">Preview frame<input type="range" min="0" max={total - 1} value={Math.min(frame, total - 1)} disabled={!valid} onChange={e => seek(Number(e.target.value))} /></label><output aria-label="Current frame">{frame + 1} / {total}</output></div><div className="scene-heading"><span>JUMP TO A SCENE</span><span>{config.seconds}s total</span></div><div className="scene-buttons">{labels.map((label, i) => <button type="button" key={label} disabled={!valid} aria-pressed={sceneIndex(config, frame) === i} onClick={() => seek(starts[i])}><span>0{i + 1}</span><strong>{label}</strong><small>{(starts[i] / 30).toFixed(1)}s</small></button>)}</div><p className="hint">Preview starts paused. Scene jumps pause at the exact boundary. Every export carries a “Product concept” label.</p></section>
<section className="export-panel" aria-labelledby="export-title"><p className="eyebrow">03 / MAKE A REAL VIDEO FILE</p><h2 id="export-title">Ready for the classroom.</h2><div className={`capability ${support?.canRender ? 'supported' : ''}`} role="status">{!support ? 'Checking H.264 export capability in this browser…' : support.canRender ? 'This browser supports silent H.264 MP4 export.' : 'Export is unavailable in this browser.'}{support?.issues?.map((issue, i) => <p key={i}>{issue.message}</p>)}{support && !support.canRender && <p>Preview remains available. Try a current browser with H.264 WebCodecs encoding support.</p>}</div><div className="disclosure"><strong>Before export</strong><p>Video content stays local. Rendering sends Remotion a render event with your IP address, page origin, render type and status. It does not send the video content. <a href="https://www.remotion.dev/docs/telemetry">Telemetry details</a></p><p>This individual, noncommercial teaching prototype uses the declared free-license basis. Reuse in another context may require a different license. <a href="./THIRD-PARTY-NOTICES.txt">License & source notices</a></p></div><div className="render-actions"><button className="primary" type="button" onClick={render} disabled={!valid || busy || !support?.canRender || support.format !== config.format}>{busy ? 'Rendering…' : 'Render silent MP4'} <span aria-hidden="true">↗</span></button><button type="button" className="secondary" disabled={!busy || job.current?.controller.signal.aborted} onClick={() => cancel()}>Cancel render</button></div>{busy && <div className="render-progress"><progress max="1" value={progress} aria-label="Render progress" /><span>{Math.round(progress * 100)}% · {encoded} frames encoded</span></div>}<p className="render-status" role="status" aria-live="polite">{status}</p><p className="hint">Editing stops an active render and clears the previous download. MP4 is silent; audio export is not supported.</p>{output && <section className="export-result"><div className="section-top"><div><h3>Your rendered file.</h3><p>{output.config.template === 'story' ? 'Product story' : 'Benefit cards'} · {output.config.format} · {output.config.seconds}s nominal · {(output.bytes / 1024).toFixed(1)} KB</p></div><a className="download" href={output.url} download={filename(output.config)}>Download MP4 ↓</a></div><video controls playsInline preload="metadata" src={output.url} aria-label="Rendered product concept video" onLoadedMetadata={e => setMediaInfo(`${e.currentTarget.videoWidth}×${e.currentTarget.videoHeight} · ${e.currentTarget.duration.toFixed(3)}s encoded`)} /><p className="hint">{mediaInfo || 'Loading exported video metadata…'}</p></section>}</section>
</div></div><section className="story-notes"><div><p className="eyebrow">THE CONCEPT, IN PLAIN TEXT</p><h2>Clear claims.<br />Visible boundaries.</h2></div><div><h3>{config.product || 'Untitled product'}</h3><p>{config.headline}</p><ol>{config.benefits.map((benefit, i) => <li key={i}>{benefit || '(Empty benefit)'}</li>)}</ol><p><strong>Invitation:</strong> {config.cta}</p></div><div><h3>A classroom concept, not proof.</h3><p>Foldline is fictional. Its benefits are proposed product ideas; there are no tested performance claims, endorsements or sales links. The artwork is a geometric illustration.</p><p>Two checked templates keep the story bounded. Export capability depends on the browser and device; preview alone does not establish export support. Your edits and rendered file remain in memory and reset on reload.</p></div></section></main><footer><span>Classroom example. No institutional affiliation or endorsement.</span><div><a href="https://github.com/jordanmeyer/bab-example-video">Source code</a><a href="./THIRD-PARTY-NOTICES.txt">Third-party notices</a></div></footer></>;
}
createRoot(document.getElementById('root')).render(<App />);
