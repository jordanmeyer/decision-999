// Paths and environment shared by every command. Everything the tool installs lives in the course folder.
import { readFileSync } from 'node:fs';
import { basename, delimiter, dirname, join } from 'node:path';

export const course = process.cwd();
export const toolchain = join(course, '.toolchain');
export const offline = process.env.COURSE_OFFLINE === '1';
export const pins = JSON.parse(readFileSync(new URL('./toolchain.json', import.meta.url), 'utf8'))[`${process.platform}-${process.arch}`];
export const unpacked = kind => join(toolchain, basename(pins[kind].url).replace(/\.zip$/, ''));
export const installed = kind => join(unpacked(kind), pins[kind].bin);

const gh = join(toolchain, 'gh');
export const env = {
  ...Object.fromEntries(Object.entries(process.env).filter(([key]) => key.toUpperCase() !== 'PATH')),
  PATH: dirname(process.execPath) + delimiter + (process.env.PATH ?? process.env.Path),
  npm_config_cache: join(toolchain, 'npm-cache'), npm_config_userconfig: join(toolchain, 'npmrc'),
  npm_config_ignore_scripts: 'true', npm_config_save_exact: 'true', npm_config_update_notifier: 'false', npm_config_fund: 'false', npm_config_audit: 'false',
  GH_CONFIG_DIR: gh, XDG_STATE_HOME: gh, XDG_CACHE_HOME: gh, XDG_DATA_HOME: gh, GH_NO_UPDATE_NOTIFIER: '1', GH_PROMPT_DISABLED: '1',
  GIT_TERMINAL_PROMPT: '0',
};
// Git asks the course copy of gh for the saved sign-in; nothing is written to the student's Git settings.
if (!offline) Object.assign(env, { GIT_CONFIG_COUNT: '2', GIT_CONFIG_KEY_0: 'credential.https://github.com.helper', GIT_CONFIG_VALUE_0: '',
  GIT_CONFIG_KEY_1: 'credential.https://github.com.helper', GIT_CONFIG_VALUE_1: `!"${installed('gh').replaceAll('\\', '/')}" auth git-credential` });
