import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration { 
    const {mode, paths, isDev} = options

    return {
    mode: mode,
    //входная точка
    entry: paths.entry,

    module: {
        //обработка разных типов расширений
        rules: buildLoaders(options),
    },
    
    // указываются типы файлов для которых при импорте не нужно указывать расширение
    resolve: buildResolvers(options.paths),

    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,

    //выход
    output: { 
        filename: '[name].[contenthash].js',
        path: paths.build,
        clean: true,
    },
    
    //плагины
    plugins: buildPlugins(paths.pathToHtml, isDev),
}
}