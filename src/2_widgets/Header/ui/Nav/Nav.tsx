import React, { memo } from 'react';
import classNames from 'classnames';
import { LinkNav } from '5_shared/ui/LinkNav/LinkNav';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './Nav.module.scss';

interface NavProps {
    className?: string;
    isLoading?: boolean;
}

export const Nav = memo((props: NavProps) => {
    const {
        isLoading,
        className,
    } = props;

    return (
        <nav className={classNames(cls.block, className)}>
            <LinkNav
                isLoading={isLoading}
                to={RouterPath.dev}
                linkKey={ContentKeyType.DEV}
            >
                Разработка
            </LinkNav>
            <LinkNav
                isLoading={isLoading}
                to={RouterPath.photo}
                linkKey={ContentKeyType.PHOTO}
            >
                Фото-проекты
            </LinkNav>
            <LinkNav
                isLoading={isLoading}
                to={RouterPath.posts}
                linkKey={ContentKeyType.POST}
            >
                Заметки
            </LinkNav>
        </nav>
    );
});
