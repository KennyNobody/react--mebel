import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import cls from './Title.module.scss';

export enum TitleModeType {
    MAIN,
    REGULAR,
}

interface TitleProps {
    className?: string;
    mode: TitleModeType;
    children: ReactNode;
}

export const Title = memo((props: TitleProps) => {
    const { className, mode, children } = props;

    const Tag: keyof JSX.IntrinsicElements = mode === TitleModeType.MAIN ? 'h1' : 'h2';

    return (
        <Tag
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            { children }
        </Tag>
    );
});
