import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';

export const buildScssLoader = (options: BuildOptions) => ({
    test: /\.s[ac]ss$/i,
    use: [
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                // разрешает модульность
                modules: {
                    // применяется модульность только к тем файлам
                    // которые удовлетворяют условию
                    auto: (resPath: string) => Boolean(resPath.includes('.module')),
                    // как называются стили в зависимости от дев режима
                    localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
    ],
});
