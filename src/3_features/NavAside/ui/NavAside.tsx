import classNames from 'classnames';
import {UserRole} from '4_entities/User';
import cls from './NavAside.module.scss';
import {ButtonLink, ButtonLinkTheme} from "5_shared/ui/ButtonLink/ButtonLink";
import {RouterPath} from "5_shared/config/router/routerConfig";
import {Link} from "react-router-dom";

interface NavAsideProps {
    role: UserRole;
    className?: string;
}

export const NavAside = (props: NavAsideProps) => {
    const {
        role,
        className,
    } = props;

    const linksUser = (
        <>
            <ButtonLink
                caption="Создать заказ"
                theme={ButtonLinkTheme.GREEN}
                link={RouterPath.adding_order}
            />
            <Link to={RouterPath.orders_list}>Мои заказы</Link>
            <Link to={RouterPath.reviews_list}>Отзывы</Link>
            <Link to={RouterPath.favorites_list}>Избранное</Link>
        </>
    );

    const linksWorker = (
        <>
            <ButtonLink
                caption="Выложить проект"
                theme={ButtonLinkTheme.GREEN}
                link={RouterPath.adding_project}
            />
            <Link to={RouterPath.portfolio}>Мое портфолио</Link>
            <Link to={RouterPath.orders_list}>Мои заказы</Link>
            <Link to={RouterPath.orders_catalog}>Поиск заказов</Link>
        </>
    );

    return (
        <nav className={classNames(cls.block, className)}>
            { role === 'client' && linksUser }
            { role === 'worker' && linksWorker}
            <Link to={RouterPath.settings}>Настройки</Link>
            <Link to="/#/">Выйти из аккаунта</Link>
        </nav>
    );
};
