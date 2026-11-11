import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// app/site.json names the app; the publishing workflow supplies the live address and commit.
const escape = text => String(text).replace(/[&<>"]/g, c => `&#${c.charCodeAt(0)};`);
const site = { name: 'site', transformIndexHtml: html => {
  const values = { ...JSON.parse(readFileSync('app/site.json', 'utf8')), url: process.env.VITE_SITE_URL ?? '', commit: process.env.VITE_COMMIT ?? 'local' };
  return html.replace(/%SITE_(\w+)%/g, (_, key) => escape(values[key.toLowerCase()]));
} };
export default defineConfig({
  plugins: [react(), site],
  root: 'app',
  base: './',
  server: { host: '127.0.0.1', fs: { deny: ['**/.git/**', '**/.env*'] } },
  build: { outDir: '../dist', emptyOutDir: true },
});
