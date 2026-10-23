// Run through app.sh/app.ps1. No user/global npm configuration or PATH changes.
import { spawn } from 'node:child_process';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve, delimiter, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const manifest = JSON.parse(await readFile('scripts/toolchain.json', 'utf8'));
if (process.versions.node !== manifest.node) throw Error(`Expected private Node ${manifest.node}; run setup with the project launcher.`);
const windows = process.platform === 'win32';
const runtime = resolve('.toolchain', `node-v${manifest.node}-${windows ? 'win' : process.platform}-${process.arch}`);
const bin = windows ? runtime : join(runtime, 'bin');
if (resolve(process.execPath) !== join(bin, windows ? 'node.exe' : 'node')) throw Error('Use the project-local runtime via app.sh/app.ps1.');
const npm = join(runtime, windows ? 'node_modules/npm/bin/npm-cli.js' : 'lib/node_modules/npm/bin/npm-cli.js');
const npmVersion = JSON.parse(await readFile(resolve(dirname(npm), '../package.json'), 'utf8')).version;
if (npmVersion !== manifest.npm) throw Error(`Expected npm ${manifest.npm}, found ${npmVersion}.`);
const [command, ...args] = process.argv.slice(2);
const commands = ['setup', 'add', 'dev', 'test:browser', 'typecheck', 'build', 'preview', 'clean'];
if (!commands.includes(command)) throw Error(`Choose ${commands.join(', ')}.`);

await mkdir('.toolchain/running', { recursive: true });
// Do not replace dependencies or remove tooling while a project command is alive.
for (const name of await readdir('.toolchain/running')) {
  const pid = Number(name);
  try { process.kill(pid, 0); }
  catch (error) { if (error.code === 'ESRCH') { await rm(`.toolchain/running/${name}`); continue; } throw error; }
  if (['setup', 'add', 'clean'].includes(command)) throw Error(`Project command ${pid} is active. Stop its terminal session first.`);
}
if (command === 'clean') {
  if (args.length) throw Error('clean accepts no paths; it removes only generated tooling and output.');
  for (const path of ['node_modules', 'dist']) await rm(path, { recursive: true, force: true });
  console.log('Generated dependencies/output removed. Launcher will remove .toolchain after Node exits.');
  process.exit(0);
}
await mkdir('.toolchain/tmp', { recursive: true });
await writeFile('.toolchain/user.npmrc', '');
await writeFile('.toolchain/global.npmrc', '');
const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !/^npm_config_/i.test(key) && key.toLowerCase() !== 'path'));
Object.assign(env, {
  PATH: `${bin}${delimiter}${process.env.PATH || process.env.Path || ''}`,
  npm_config_cache: resolve('.toolchain/npm-cache'),
  npm_config_prefix: resolve('.toolchain/npm-prefix'),
  npm_config_userconfig: resolve('.toolchain/user.npmrc'),
  npm_config_globalconfig: resolve('.toolchain/global.npmrc'),
  npm_config_include: 'dev', npm_config_ignore_scripts: 'true', npm_config_save_exact: 'true', npm_config_update_notifier: 'false',
  TMPDIR: resolve('.toolchain/tmp'), TMP: resolve('.toolchain/tmp'), TEMP: resolve('.toolchain/tmp'),
  PLAYWRIGHT_BROWSERS_PATH: resolve('.toolchain/browsers'),
});
let executableArgs;
if (command === 'setup') {
  if (args.length) throw Error('setup accepts no extra arguments.');
  const recorded = (await readFile('.node-version', 'utf8')).trim();
  if (recorded !== manifest.node) throw Error('.node-version and scripts/toolchain.json disagree.');
  executableArgs = [npm, 'ci'];
} else if (command === 'add') {
  // Only explicit package versions and dependency role selection, never global flags.
  if (!args.length || args.some(arg => arg !== '--save-dev' && !/^(@[^/@\s]+\/)?[^/@\s]+@\d+\.\d+\.\d+([-.][\w.]+)?$/.test(arg))) throw Error('add expects package@exact.version, optionally --save-dev. Check the plugin inventory first.');
  executableArgs = [npm, 'install', '--save-exact', ...args];
} else if (['dev', 'test:browser', 'preview'].includes(command)) {
  executableArgs = ['node_modules/vite/bin/vite.js', ...(command === 'preview' ? ['preview'] : []), ...(command === 'test:browser' ? ['--mode', 'test'] : []), ...args];
} else executableArgs = [npm, 'run', command, '--', ...args];

const marker = `.toolchain/running/${process.pid}`;
await writeFile(marker, command);
try {
  const child = spawn(process.execPath, executableArgs, { cwd: root, env, stdio: 'inherit' });
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
  process.exitCode = await new Promise((done, reject) => { child.on('error', reject); child.on('exit', code => done(code ?? 1)); });
} finally { await rm(marker, { force: true }); }
