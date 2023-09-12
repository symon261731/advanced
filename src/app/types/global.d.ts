
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
