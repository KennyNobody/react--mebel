import React from 'react';
import classNames from 'classnames';
import IconX from '5_shared/assets/icons/x.svg';
import IconGH from '5_shared/assets/icons/gh.svg';
import IconFB from '5_shared/assets/icons/fb.svg';
import IconTG from '5_shared/assets/icons/tg.svg';
import IconVK from '5_shared/assets/icons/vk.svg';
import IconInst from '5_shared/assets/icons/inst.svg';

interface IconSocialProps {
    iconKey: IconKey;
    className?: string;
}

export enum IconKey {
    X = 'x',
    GH = 'gh',
    FB = 'fb',
    TG = 'tg',
    VK = 'vk',
    INST = 'inst',
}

export const renderIcon = (iconKey: IconKey, className: string | undefined) => {
    const iconClassname = className ? classNames(className) : '';

    const iconsComponents: Record<IconKey, JSX.Element> = {
        [IconKey.X]: <IconX className={iconClassname} />,
        [IconKey.GH]: <IconGH className={iconClassname} />,
        [IconKey.FB]: <IconFB className={iconClassname} />,
        [IconKey.TG]: <IconTG className={iconClassname} />,
        [IconKey.VK]: <IconVK className={iconClassname} />,
        [IconKey.INST]: <IconInst className={iconClassname} />,
    };

    return iconsComponents[iconKey] || null;
};

export const IconSocial = (props: IconSocialProps) => {
    const { iconKey, className } = props;

    return renderIcon(iconKey, className);
};
