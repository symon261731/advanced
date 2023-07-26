

export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    pathToHtml: string;
    build: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}