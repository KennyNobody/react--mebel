import classNames from 'classnames';
import { Link } from 'react-router-dom';
import IconOrders from '5_shared/assets/icons/orders.svg';
import IconLogout from '5_shared/assets/icons/logout.svg';
import IconSearch from '5_shared/assets/icons/search.svg';
import IconMyList from '5_shared/assets/icons/my-list.svg';
import IconNext from '5_shared/assets/icons/arrow-next.svg';
import IconReviews from '5_shared/assets/icons/reviews.svg';
import IconSettings from '5_shared/assets/icons/settings.svg';
import IconFavorites from '5_shared/assets/icons/favorites.svg';
import { AppRouter } from '5_shared/config/router/routerConfig';
import cls from './LinkAside.module.scss';

type LinkAsideTheme = 'regular' | 'light';

interface LinkAsideProps {
    caption: string;
    isActive?: true;
    iconKey: IconKey;
    className?: string;
    theme: LinkAsideTheme;
    linkProp: AppRouter | string;
}

export enum IconKey {
    MY_LIST = 'my-list',
    ORDERS = 'orders',
    REVIEWS = 'reviews',
    SEARCH = 'search',
    FAVORITES = 'favorites',
    SETTINGS = 'settings',
    LOGOUT = 'logout',

}

export const renderIcon = (iconKey: IconKey, className: string | undefined) => {
    const iconClassname = className ? classNames(className) : '';

    const iconsComponents: Record<IconKey, React.JSX.Element> = {
        [IconKey.MY_LIST]: <IconMyList className={iconClassname} />,
        [IconKey.ORDERS]: <IconOrders className={iconClassname} />,
        [IconKey.LOGOUT]: <IconLogout className={iconClassname} />,
        [IconKey.SEARCH]: <IconSearch className={iconClassname} />,
        [IconKey.REVIEWS]: <IconReviews className={iconClassname} />,
        [IconKey.SETTINGS]: <IconSettings className={iconClassname} />,
        [IconKey.FAVORITES]: <IconFavorites className={iconClassname} />,
    };

    return iconsComponents[iconKey] || null;
};

export const LinkAside = (props: LinkAsideProps) => {
    const {
        theme,
        caption,
        iconKey,
        linkProp,
        isActive,
        className,
    } = props;

    return (
        <Link to={linkProp} className={classNames(cls.link, cls[`link--${theme}`], { [cls.active]: isActive }, className)}>
            { renderIcon(iconKey, cls.icon) }
            <span className={classNames(cls.text)}>
                { caption }
            </span>
            {
                theme !== 'light'
                && (
                    <IconNext
                        className={classNames(cls.iconNext)}
                    />
                )
            }
        </Link>
    );
};
