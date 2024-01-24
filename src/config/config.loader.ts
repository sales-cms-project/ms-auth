import { ConfigLoaderAdapter } from './config_loader.interface';

export enum configLoaderEnum {
  HTTP = 'http',
  CRYPTOGRAPHY = 'cryptography',
}

const getConfig = (): ConfigLoaderAdapter => ({
  http: {
    host: process.env.HTTP_HOST || 'localhost:3003',
  },
  cryptography: {
    salt: Number(process.env.CRYPTOGRAPHY_SALT) || 10,
  },
});

export { getConfig };
