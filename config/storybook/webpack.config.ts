import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../webpack/build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        pathToHtml: '',
        entry: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    // разрешает модульность
                    modules: {
                        // применяется модульность только к тем файлам
                        // которые удовлетворяют условию
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        // как называются стили в зависимости от дев режима
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    // const svgLoader = {
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     use: ['@svgr/webpack'],
    // };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = [
        ...config!.module!.rules!.map((rule) => {
            // @ts-ignore
            if (/svg/.test(rule!.test)) {
            // Silence the Storybook loaders for SVG files
            // @ts-ignore
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        }),
        // Add your custom SVG loader
        {
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        },
    ];

    config.module?.rules?.push(
        babelLoader,
        tsLoader,
        scssLoader,
        fileLoader,
    );

    return config;
};
