import { Configuration as devConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): devConfig {
  return {
    port: options.port,
    open: true,
    hot: true
  };
}
