import { ConfigLoaderAdapter } from './config_loader.interface';

export enum configLoaderEnum {
  HTTP = 'http',
}

const getConfig = (): ConfigLoaderAdapter => ({
  http: {
    host: process.env.HTTP_HOST || 'localhost:3003',
  },
});

export { getConfig };
