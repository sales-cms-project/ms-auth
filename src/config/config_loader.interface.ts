export interface HttpSetup {
  host: string;
}

export interface ICryptographyConfig {
  salt: number;
}

export interface ConfigLoaderAdapter {
  http: HttpSetup;
  cryptography: ICryptographyConfig;
}
