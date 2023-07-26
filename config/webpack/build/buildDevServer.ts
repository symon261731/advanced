import { BuildOptions } from "./types/config";
import type { Configuration, Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        // для отсуствия ошибок get запросов при перезагрузки странице 
        historyApiFallback: true,
    }
}