import classNames from 'classnames';
import React, { LinkHTMLAttributes, memo } from 'react';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import { IconKey, IconSocial } from '5_shared/ui/IconSocial/IconSocial';
import cls from './LinkSocial.module.scss';

interface LinkSocialProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    iconKey: IconKey;
    themeProp?: AppTheme;
}

export const LinkSocial = memo((props: LinkSocialProps) => {
    const {
        iconKey,
        className,
        themeProp,
        ...otherProps
    } = props;

    const { theme } = useTheme();

    return (
        <a
            {...otherProps}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(cls.link, cls[`link--${themeProp || theme}`], className)}
        >
            <IconSocial
                iconKey={iconKey}
                className={classNames(cls.icon)}
            />
        </a>
    );
});
