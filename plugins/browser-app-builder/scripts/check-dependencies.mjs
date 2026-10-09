// Run from the installed plugin: node /.../scripts/check-dependencies.mjs /student/project
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const inventory = JSON.parse(await readFile(new URL('../references/libraries.json', import.meta.url), 'utf8'));
const project = resolve(process.argv[2] || '.');
const pkg = JSON.parse(await readFile(resolve(project, 'package.json'), 'utf8'));
const allowed = { ...inventory.tooling };
for (const lib of inventory.libraries.filter(lib => lib.status === 'approved')) Object.assign(allowed, lib.packages, lib.peers);
for (const field of ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies']) {
  for (const [name, version] of Object.entries(pkg[field] || {})) {
    if (allowed[name] !== version) throw Error(`Unapproved dependency: ${name}@${version}`);
  }
}
const direct = { ...pkg.dependencies, ...pkg.devDependencies, ...pkg.optionalDependencies, ...pkg.peerDependencies };
for (const lib of inventory.libraries) {
  if (!Object.keys(lib.packages).some(name => name in direct)) continue;
  for (const [name, version] of Object.entries({ ...lib.packages, ...lib.peers })) {
    if (direct[name] !== version) throw Error(`Missing approved companion: ${name}@${version}`);
  }
}
for (const [name, version] of Object.entries(pkg.overrides || {})) {
  if (inventory.overrides[name] !== version) throw Error(`Unapproved override: ${name}`);
}
if (direct.mermaid && pkg.overrides?.katex !== inventory.overrides.katex) throw Error('Mermaid requires the approved KaTeX override');
const lock = JSON.parse(await readFile(resolve(project, 'package-lock.json'), 'utf8'));
for (const field of ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies']) {
  const expected = Object.entries(pkg[field] || {}).sort();
  if (JSON.stringify(expected) !== JSON.stringify(Object.entries(lock.packages[''][field] || {}).sort())) throw Error(`Stale lockfile: ${field}`);
}
for (const [path, entry] of Object.entries(lock.packages)) {
  if (!path) continue;
  if (!path.startsWith('node_modules/') || entry.link || !entry.integrity || !entry.resolved?.startsWith('https://registry.npmjs.org/')) throw Error(`Unsupported locked dependency: ${path}`);
}
console.log('Approved direct dependencies and registry lockfile. Review transitive changes and run npm ci before testing.');
