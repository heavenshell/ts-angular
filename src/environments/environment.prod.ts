import { default as packageInfo } from '../../package.json';

export const environment = {
  production: true,
  version: packageInfo.version,
};
