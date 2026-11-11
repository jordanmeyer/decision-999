// Publish the licence texts of the fonts and every bundled package with the site.
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
const lock = JSON.parse(await readFile('package-lock.json', 'utf8'));
const sections = await Promise.all(['ebgaramond-license.txt', 'opensans-license.txt'].map(name => readFile(`app/theme/fonts/${name}`, 'utf8')));
const missing = [];
for (const [path, entry] of Object.entries(lock.packages)) {
  if (!path || entry.dev) continue;
  const names = await readdir(path).catch(() => []);
  const notices = names.filter(name => /^(licen[sc]e|copying|notice)([.-]|$)/i.test(name)).sort();
  const name = path.slice(13);
  if (!notices.length) { missing.push(name); sections.push(`${name} @ ${entry.version}\n${entry.license || 'See package'}`); continue; }
  sections.push(`${name} @ ${entry.version}\n${entry.license || 'See notice'}\n` + (await Promise.all(notices.map(file => readFile(join(path, file), 'utf8')))).join('\n'));
}
await mkdir('app/public', { recursive: true });
await writeFile('app/public/THIRD-PARTY-NOTICES.txt', sections.join('\n\n--------\n\n').split('\n').map(line => line.trimEnd()).join('\n').trimEnd() + '\n');
for (const name of missing) console.warn(`Warning: ${name} ships no licence file; only its declared licence is listed.`);
