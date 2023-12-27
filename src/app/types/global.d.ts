declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

// eslint-disable-next-line no-underscore-dangle
declare const __IS_DEV__: boolean;
// eslint-disable-next-line no-underscore-dangle
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
