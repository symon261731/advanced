import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildPaths } from './types/config';

export function buildPlugins(paths: BuildPaths, isDev: boolean, apiUrl: string, project: string): webpack.WebpackPluginInstance[] {
    const pluginsOnlyForDev = isDev ? [
        new BundleAnalyzerPlugin(
            { openAnalyzer: false },
        ),
        new ReactRefreshWebpackPlugin(),
    ] : [];

    return [
        new HtmlWebpackPlugin({
            template: paths.pathToHtml,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                { from: paths.localesPath, to: paths.localesBuildForProdPath },
            ],
        }),
        ...pluginsOnlyForDev,
    ];
}
