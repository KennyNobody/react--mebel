import {memo} from 'react';
import classNames from 'classnames';
import cls from './Name.module.scss';
import {Skeleton, SkeletonMode} from "5_shared/ui/Skeleton/Skeleton";

interface NameProps {
    isMain: boolean;
    className?: string;
    isLoading?: boolean;
    name?: string | null;
    nickname?: string | null;
}

export const Name = memo((props: NameProps) => {
    const {
        name,
        isMain,
        isLoading,
        nickname,
        className,
    } = props;

    const Tag: keyof JSX.IntrinsicElements = isMain ? 'h1' : 'p';

    if (isLoading) {
        return (
            <Skeleton
                mode={SkeletonMode.BLOCK}
                className={classNames(cls.skeleton, className)}
            />
        );
    }

    return (
        <Tag
            className={
                classNames(
                    cls.name,
                    { [cls['name--main']]: isMain },
                    className,
                )
            }
        >
            { name || '...' }
            {
                nickname
                && (
                    <span className={cls.nickname}>{` / ${nickname}`}</span>
                )
            }
        </Tag>
    );
});
