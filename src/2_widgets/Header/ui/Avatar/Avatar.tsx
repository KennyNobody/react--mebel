import { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { Skeleton, SkeletonMode } from '5_shared/ui/Skeleton/Skeleton';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './Avatar.module.scss';
import FancyboxDecorator from "5_shared/libs/decorators/FancyboxDecorator";

interface AvatarProps {
    url?: string;
    isMain: boolean;
    className?: string;
    isLoading?: boolean;
    galleryKey?: string;
    themeProp?: AppTheme;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        url,
        isMain,
        className,
        isLoading,
        galleryKey,
        themeProp,
    } = props;

    const { theme } = useTheme();

    const main = (
        <div
            className={
                classNames(
                    cls.block,
                    cls['block--main'],
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        >
            {
                isLoading
                && (
                    <Skeleton
                        mode={SkeletonMode.BLOCK}
                        className={classNames(cls.skeleton)}
                    />
                )
            }
            {
                !isLoading
                && url
                && (
                    <FancyboxDecorator
                        className={classNames(cls.decorator)}
                    >
                        <img
                            alt="#"
                            loading="lazy"
                            src={`${__BASE_URL__}${url}`}
                            data-fancybox={galleryKey || 'avatar-gallery'}
                        />
                    </FancyboxDecorator>
                )
            }

        </div>
    );

    const regular = (
        <Link
            to={RouterPath.main}
            className={
                classNames(
                    cls.block,
                    { [cls['block--main']]: isMain },
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        >
            {
                isLoading
                && (
                    <Skeleton
                        mode={SkeletonMode.BLOCK}
                        className={classNames(cls.skeleton)}
                    />
                )
            }
            {
                !isLoading
                && url
                && (
                    <img
                        alt="#"
                        loading="lazy"
                        src={`${__BASE_URL__}${url}`}
                    />
                )
            }

        </Link>
    );

    return isMain ? main : regular;
});
