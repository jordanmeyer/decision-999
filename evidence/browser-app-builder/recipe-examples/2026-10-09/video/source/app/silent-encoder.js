// This application distributes silent MP4 only; optional audio encoders are excluded.
export function registerAacEncoder() { throw Error('Audio export is unsupported in this silent-video application.'); }
export const registerMp3Encoder = registerAacEncoder;
export const registerFlacEncoder = registerAacEncoder;
