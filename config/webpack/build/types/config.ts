export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    pathToHtml: string;
    build: string;
    src: string;
    localesPath: string;
    localesBuildForProdPath: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}
