import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(pathToHtml: string): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: pathToHtml,
        }),
        new webpack.ProgressPlugin(), 
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}