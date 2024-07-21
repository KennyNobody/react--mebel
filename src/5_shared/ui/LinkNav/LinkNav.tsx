import classNames from 'classnames';
import {memo, ReactNode, useEffect, useState,} from 'react';
import {NavLink, NavLinkProps, useLocation,} from 'react-router-dom';
import {useTheme} from '5_shared/libs/hooks/useTheme';
import {AppTheme} from '5_shared/config/ThemeContext';
import {ContentKeyType} from '5_shared/types/CommonTypes';
import cls from './LinkNav.module.scss';
import {Skeleton, SkeletonMode} from "5_shared/ui/Skeleton/Skeleton";

interface LinkAppProps extends NavLinkProps {
    className?: string;
    children: ReactNode;
    themeProp?: AppTheme;
    isLoading?: boolean;
    linkKey: ContentKeyType;
}

export const LinkNav = memo((props: LinkAppProps) => {
    const {
        linkKey,
        children,
        themeProp,
        className,
        isLoading,
        ...otherProps
    } = props;
    const { pathname } = useLocation();
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        const link = pathname.slice(1, linkKey.length + 1);
        setIsActive(link === linkKey);
    }, [pathname]);

    const skeleton = (
        <Skeleton
            mode={SkeletonMode.BLOCK}
            className={
                classNames(
                    cls.skeleton,
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        />
    );

    const content = (
        <NavLink
            {...otherProps}
            className={
                classNames([
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    isActive && [cls['block--active']],
                    className,
                ])
            }
        >
            { children }
        </NavLink>
    );

    return isLoading ? skeleton : content;
});
