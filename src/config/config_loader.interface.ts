export interface HttpSetup {
  host: string;
}

export interface ConfigLoaderAdapter {
  http: HttpSetup;
}
