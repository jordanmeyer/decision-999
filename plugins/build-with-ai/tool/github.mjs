// Every call to GitHub goes through here. COURSE_OFFLINE=1 skips them all, for testing against a local stand-in.
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, openSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import { env, installed, offline, toolchain } from './env.mjs';

const call = (args, cwd) => spawnSync(installed('gh'), args, { cwd, env, encoding: 'utf8' });
function gh(...args) {
  const result = call(args);
  if (result.status) throw Error(/auth login/.test(result.stderr) ? 'not signed in to GitHub: run signin' : `GitHub said: ${result.stderr.trim()}`);
  return result.stdout.trim();
}
const identityFile = join(toolchain, 'identity.json');
// Offline, a folder of bare repositories named <owner>/<name>.git (COURSE_GITHUB) can stand in for GitHub.
const standIn = full => join(process.env.COURSE_GITHUB, `${full}.git`);
const repository = (dir, remote) => spawnSync('git', ['remote', 'get-url', remote], { cwd: dir, encoding: 'utf8' }).stdout.match(/github\.com[/:](.+?)(\.git)?\s*$/)?.[1];

// Start GitHub's one-time-code sign-in in the background and print the code; the student enters it and clicks Authorize.
export async function signin() {
  if (offline) return 'offline: not signed in';
  if (!call(['auth', 'status']).status) return `signed in to GitHub as ${identity().login}`;
  const log = join(toolchain, 'signin.log');
  writeFileSync(log, '');
  spawn(installed('gh'), ['auth', 'login', '--web', '--hostname', 'github.com', '--git-protocol', 'https', '--scopes', 'workflow'],
    { env: { ...env, GH_BROWSER: 'none' }, detached: true, stdio: ['ignore', openSync(log, 'a'), openSync(log, 'a')] }).unref();
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    const code = readFileSync(log, 'utf8').match(/code\W+([A-Z0-9]{4}-[A-Z0-9]{4})/)?.[1];
    if (code) return `open https://github.com/login/device and enter the code ${code}; run signin again after clicking Authorize`;
  }
  throw Error(`GitHub sign-in did not start: ${readFileSync(log, 'utf8').trim()}`);
}

export function signout() {
  if (!offline) call(['auth', 'logout', '--hostname', 'github.com']);
  rmSync(identityFile, { force: true });
}

// The commit name and GitHub's private address, so a student's email never appears in public history.
export function identity() {
  if (offline) { const login = process.env.COURSE_USER || 'student'; return { login, name: login, email: `${login}@users.noreply.github.com` }; }
  if (!existsSync(identityFile)) {
    const [login, id, name] = gh('api', 'user', '--jq', '.login, .id, (.name // "")').split('\n');
    writeFileSync(identityFile, JSON.stringify({ login, name: name || login, email: `${id}+${login}@users.noreply.github.com` }));
  }
  return JSON.parse(readFileSync(identityFile, 'utf8'));
}

// Accept a pending invitation to a teammate's repository and return its address.
export function accept(full) {
  if (offline) return process.env.COURSE_GITHUB ? standIn(full) : full;
  const id = gh('api', 'user/repository_invitations', '--jq', `.[] | select(.repository.full_name | ascii_downcase == "${full.toLowerCase()}") | .id`);
  if (id) gh('api', '-X', 'PATCH', `user/repository_invitations/${id}`);
  return `https://github.com/${full}.git`;
}

export function invite(dir, user) {
  gh('api', '-X', 'PUT', `repos/${repository(dir, 'origin')}/collaborators/${user}`, '-f', 'permission=push');
}

// Use the student's repository of this name as the given remote, creating it with Pages turned on before the first push.
export function create(dir, remote) {
  const { login } = identity(), name = basename(dir), full = `${login}/${name}`, url = offline ? standIn(full) : `https://github.com/${full}.git`;
  const { tagline } = JSON.parse(readFileSync(join(dir, 'app/site.json'), 'utf8'));
  if (offline) spawnSync('git', ['init', '-q', '--bare', '-b', 'main', url]);
  else if (call(['repo', 'view', full]).status) {
    gh('repo', 'create', full, '--public', '--description', tagline, '--homepage', `https://${login.toLowerCase()}.github.io/${name}/`);
    call(['api', '-X', 'POST', `repos/${full}/pages`, '-f', 'build_type=workflow']);  // if this does not take, live() turns Pages on
  }
  const git = args => spawnSync('git', args, { cwd: dir, env }).status;
  if (!git(['fetch', '-q', url, 'main']) && git(['merge-base', 'HEAD', 'FETCH_HEAD'])) throw Error(`GitHub already has a repository ${full} with different work: rename this project's folder and publish again`);
  git(['remote', 'add', remote, url]);
}

export function address(dir) {
  const full = !offline && repository(dir, 'origin');
  return full ? call(['api', `repos/${full}/pages`, '--jq', '.html_url']).stdout.trim() || undefined : undefined;
}

// Wait for the publishing workflow, then for the live page to carry this commit.
// If Pages is still off, the push's run has failed: turn Pages on and follow a dispatched run instead.
// A run that failed before (publish run again) is rerun; a cancelled one was replaced by a teammate's newer run.
export async function live(dir, remote, commit) {
  const full = repository(dir, remote), off = call(['api', `repos/${full}/pages`]).status;
  if (off) {
    gh('api', '-X', 'POST', `repos/${full}/pages`, '-f', 'build_type=workflow');
    gh('workflow', 'run', 'pages.yml', '-R', full, '--ref', 'main');
  }
  let run, conclusion;
  for (let i = 0; i < 60 && !run; i++) {
    await sleep(5000);
    [run, conclusion] = gh('run', 'list', '-R', full, '--commit', commit, '--event', off ? 'workflow_dispatch' : 'push', '--json', 'databaseId,createdAt,conclusion',
      '--jq', 'max_by(.createdAt) // empty | "\\(.databaseId) \\(.conclusion)"').split(' ');
  }
  if (!run) throw Error(`the publishing workflow did not start: see https://github.com/${full}/actions`);
  if (conclusion === 'failure') { gh('run', 'rerun', run, '-R', full); await sleep(10000); }  // let the new attempt replace the failed one
  if (call(['run', 'watch', run, '-R', full, '--exit-status']).status)
    throw Error(`the publishing workflow failed: https://github.com/${full}/actions/runs/${run}\n${call(['run', 'view', run, '-R', full, '--log-failed']).stdout.split('\n').slice(-30).join('\n')}`);
  const url = gh('api', `repos/${full}/pages`, '--jq', '.html_url');
  for (let i = 0; i < 60; i++) {
    if ((await fetch(url, { cache: 'no-store' }).then(r => r.text(), () => '')).includes(`<meta name="build" content="${commit}">`)) return url;
    await sleep(5000);
  }
  throw Error(`${url} still shows an older version after five minutes`);
}
