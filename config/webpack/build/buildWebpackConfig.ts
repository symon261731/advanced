import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {
        mode,
        paths,
        isDev,
        apiUrl,
    } = options;

    return {
        mode,
        // входная точка
        entry: paths.entry,

        module: {
            // обработка разных типов расширений
            rules: buildLoaders(options),
        },

        // указываются типы файлов для которых при импорте не нужно указывать расширение
        resolve: buildResolvers(options.paths),

        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,

        // выход
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },

        // плагины
        plugins: buildPlugins(paths.pathToHtml, isDev, apiUrl, options.project),
    };
}
