// This application exports silent video only; no audio encoder is distributed.
export function registerAacEncoder(){throw Error('Audio export is unsupported in this silent-video application.');}
export const registerMp3Encoder=registerAacEncoder;
export const registerFlacEncoder=registerAacEncoder;
