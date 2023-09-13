import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        // для отсуствия ошибок get запросов при перезагрузки странице
        historyApiFallback: true,
        hot: true,
    };
}
