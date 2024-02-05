import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/babelLoader';
import { buildScssLoader } from './loaders/scssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = buildBabelLoader(options);

    const scssLoader = buildScssLoader(options);

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        babelLoader,
        tsLoader,
        scssLoader,
        svgLoader,
        fileLoader,
    ];
}
