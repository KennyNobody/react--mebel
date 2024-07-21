import {memo} from 'react';
import classNames from 'classnames';
import {AppData} from '0_app/types/MainResponseType';
import cls from './Description.module.scss';
import {Skeleton, SkeletonMode} from "5_shared/ui/Skeleton/Skeleton";

interface DescriptionProps {
    data?: AppData;
    isLoading?: boolean;
    className?: string;
}

export const Description = memo((props: DescriptionProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    const content = (
        <p>
            { data?.description }
        </p>
    );

    const skeleton = (
        <Skeleton
            strings={3}
            mode={SkeletonMode.LINES}
        />
    );

    return (
        <div className={classNames(cls.block, className)}>
            { isLoading ? skeleton : content }
        </div>
    );
});
