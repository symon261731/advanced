import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildOptions, BuildPaths } from './config/webpack/build/types/config';
import { buildWebpackConfig } from './config/webpack/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        pathToHtml: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        localesPath: path.resolve(__dirname, 'public', 'locales'),
        localesBuildForProdPath: path.resolve(__dirname, 'build', 'locales'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3001;
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    const isDev = mode === 'development';

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    };

    const config: webpack.Configuration = buildWebpackConfig(options);

    return config;
};
