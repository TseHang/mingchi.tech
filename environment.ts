// runtime env

export const env = (key: string, defaultValue = '') =>
  process.env[key] || defaultValue;

export const GITHUB = env('DEPLOY_ENV') === 'github' || window.location.host.includes('github.io');
export const PROJ_NAME = GITHUB ? 'mingchi.tech' : '';