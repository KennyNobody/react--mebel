import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getUserRole } from '4_entities/User';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { IconKey, LinkAside } from '5_shared/ui/LinkAside/LinkAside';
import { ButtonLink, ButtonLinkTheme } from '5_shared/ui/ButtonLink/ButtonLink';
import cls from './NavAside.module.scss';

interface NavAsideProps {
    className?: string;
}

export const NavAside = (props: NavAsideProps) => {
    const {
        className,
    } = props;

    const userRole = useSelector(getUserRole);

    const linksUser = (
        <>
            <ButtonLink
                caption="Создать заказ"
                theme={ButtonLinkTheme.GREEN}
                link={RouterPath.adding_order}
            />
            <LinkAside
                theme="regular"
                caption="Мои заказы"
                iconKey={IconKey.ORDERS}
                linkProp={RouterPath.orders_list}
            />
            <LinkAside
                theme="regular"
                caption="Отзывы"
                iconKey={IconKey.REVIEWS}
                linkProp={RouterPath.reviews_list}
            />
            <LinkAside
                theme="regular"
                caption="Избранное"
                iconKey={IconKey.FAVORITES}
                linkProp={RouterPath.favorites_list}
            />
        </>
    );

    const linksWorker = (
        <>
            <ButtonLink
                caption="Выложить проект"
                theme={ButtonLinkTheme.GREEN}
                link={RouterPath.adding_project}
            />
            <LinkAside
                theme="regular"
                caption="Мое портфолио"
                iconKey={IconKey.MY_LIST}
                linkProp={RouterPath.portfolio}
            />
            <LinkAside
                theme="regular"
                caption="Мои заказы"
                iconKey={IconKey.ORDERS}
                linkProp={RouterPath.orders_list}
            />
            <LinkAside
                theme="regular"
                caption="Поиск заказов"
                iconKey={IconKey.SEARCH}
                linkProp={RouterPath.orders_catalog}
            />
        </>
    );

    return (
        <nav className={classNames(cls.block, className)}>
            { userRole === 'client' && linksUser }
            { userRole === 'worker' && linksWorker}
            <LinkAside
                theme="regular"
                caption="Настройки"
                iconKey={IconKey.SETTINGS}
                linkProp={RouterPath.settings}
            />
            <LinkAside
                theme="light"
                linkProp="/#/"
                iconKey={IconKey.LOGOUT}
                caption="Выйти из аккаунта"
            />
        </nav>
    );
};
