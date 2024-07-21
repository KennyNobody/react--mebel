import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { ReactNode, useEffect } from 'react';
import { ThemeSwitcher } from '3_features/ThemeSwitcher';
import { LanguageSwitcher } from '3_features/LanguageSwitcher';
import { LinkNav } from '5_shared/ui/LinkNav/LinkNav';
import { Overlay } from '5_shared/ui/Overlay/Overlay';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { WidgetMobile } from '5_shared/ui/WidgetMobile/WidgetMobile';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import cls from './MenuMobile.module.scss';
import { menuMobileActions } from '../../model/slices/menuMobile';
import { getMenuMobileIsOpened } from '../../model/selectors/menuMobile';

interface MenuMobileProps {
    className?: string;
    children: ReactNode;
}

export const MenuMobile = (props: MenuMobileProps) => {
    const {
        children,
        className,
    } = props;

    const location = useLocation();
    const dispatch = useAppDispatch();

    const isOpened = useSelector(getMenuMobileIsOpened);
    const { theme } = useTheme();
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpened) {
            dispatch(menuMobileActions.setMenuMobileState());
        }
    }, [location]);

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    className,
                )
            }
        >
            <Overlay
                isVisible={isOpened || false}
                className={classNames(cls.overlay)}
            />
            <div className={classNames(cls.wrapper)}>
                { children }
            </div>
            <nav
                hidden={!isOpened}
                className={classNames(cls.nav)}
            >
                <LinkNav linkKey={ContentKeyType.DEV} to={RouterPath.dev}>Разработка</LinkNav>
                <LinkNav linkKey={ContentKeyType.PHOTO} to={RouterPath.photo}>Фото-проекты</LinkNav>
                <LinkNav linkKey={ContentKeyType.POST} to={RouterPath.posts}>Заметки</LinkNav>
                {/* TODO: Раскомментировать, когда будет голова английская версия */}
                {/* <WidgetMobile */}
                {/*     title={t('language')} */}
                {/* > */}
                {/*     <LanguageSwitcher */}
                {/*         className={ */}
                {/*             classNames( */}
                {/*                 cls.switcher, */}
                {/*             ) */}
                {/*         } */}
                {/*     /> */}
                {/* </WidgetMobile> */}
                <WidgetMobile
                    title={t('theme')}
                >
                    <ThemeSwitcher />
                </WidgetMobile>
            </nav>
        </div>
    );
};
