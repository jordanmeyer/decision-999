// Load the built site in a headless browser at desktop and phone sizes; save the screenshots and the share card.
import { createServer } from 'node:http';
import { mkdirSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { chromium } from 'playwright-core';
import { installed } from './env.mjs';

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.csv': 'text/csv', '.txt': 'text/plain',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ttf': 'font/ttf', '.woff2': 'font/woff2', '.wasm': 'application/wasm' };
const views = [['desktop', 1280, 800, 'process/screenshots/desktop.png'], ['phone', 390, 844, 'process/screenshots/mobile.png'], ['card', 1200, 630, 'app/public/card.png']];

export async function pages(dir) {
  // Serve dist/ under a folder name, as GitHub Pages does.
  const server = createServer((request, response) => {
    const file = decodeURIComponent(new URL(request.url, 'http://local').pathname).replace(/^\/site\//, '').replace(/^$|\/$/, '$&index.html');
    try { response.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(join(dir, 'dist', file))); }
    catch { response.writeHead(404).end(); }
  }).listen(0, '127.0.0.1');
  await new Promise(done => server.once('listening', done));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: installed('browser') });
  const problems = new Set();
  mkdirSync(join(dir, 'process/screenshots'), { recursive: true });
  for (const [name, width, height, file] of views) {
    const page = await browser.newPage({ viewport: { width, height } });
    const local = url => url.startsWith(origin) || /^(data|blob):/.test(url);
    page.on('request', r => local(r.url()) || problems.add(`the page requested another website: ${r.url()}`));
    page.on('requestfailed', r => local(r.url()) && problems.add(`a request failed: ${r.url()}`));
    page.on('response', r => r.status() >= 400 && problems.add(`a file is missing: ${r.url().replace(origin, '')}`));
    page.on('pageerror', error => problems.add(`the page reported an error: ${error.message}`));
    page.on('console', message => message.type() === 'error' && problems.add(`the console reported an error: ${message.text()}`));
    await page.goto(`${origin}/site/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    if (!(await page.locator('body').innerText()).trim()) problems.add(`the page is blank at ${name} size`);
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) problems.add(`the page scrolls sideways at ${name} size`);
    await page.screenshot({ path: join(dir, file), fullPage: name !== 'card' });
  }
  await browser.close();
  server.close();
  return [...problems];
}
