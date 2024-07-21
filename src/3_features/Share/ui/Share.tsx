import {
    VKShareButton,
    TwitterShareButton,
    FacebookShareButton,
    TelegramShareButton,
} from 'react-share';
import classNames from 'classnames';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { Controls } from '5_shared/ui/Controls/Controls';
import { IconKey, IconSocial } from '5_shared/ui/IconSocial/IconSocial';
import cls from './Share.module.scss';

interface ShareProps {
    className?: string;
    themeProp?: AppTheme;
    data: PostArticleType | ArticleDevType;
}

export const Share = memo((props: ShareProps) => {
    const {
        data,
        themeProp,
        className,
    } = props;
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const themeMode = themeProp || theme;
    const currentUrl = window.location.href;
    const currentPreview = `${__BASE_URL__}${data?.main?.preview?.data?.url}` || '';

    return (
        <div className={classNames(cls.block, className)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={
                    classNames(
                        cls.title,
                        cls[`title--${themeProp || theme}`],
                    )
                }
            >
                { t('share') }
            </button>
            <Controls
                className={
                    classNames(
                        cls.controls,
                        { [cls['controls--visible']]: isOpen },
                    )
                }
            >
                <VKShareButton
                    url={currentUrl}
                    title={data?.title}
                    image={currentPreview}
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.VK}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </VKShareButton>
                <TwitterShareButton
                    url={currentUrl}
                    title={data?.title}
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.X}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </TwitterShareButton>
                <FacebookShareButton
                    url={currentUrl}
                    title={data?.title}
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.FB}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </FacebookShareButton>
                <TelegramShareButton
                    url={currentUrl}
                    title={data?.title}
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.TG}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </TelegramShareButton>
            </Controls>
        </div>
    );
});
