declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import { FC, SVGProps } from 'react';

    const content: FC<SVGProps<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __BASE_URL__: string;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
