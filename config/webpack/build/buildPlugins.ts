import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(pathToHtml: string, isDev: boolean): webpack.WebpackPluginInstance[] {
    const pluginsOnlyForDev = isDev ? [
        new BundleAnalyzerPlugin(
            { openAnalyzer: false },
        ),
    ] : [];

    return [
        new HtmlWebpackPlugin({
            template: pathToHtml,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        ...pluginsOnlyForDev,
    ];
}
