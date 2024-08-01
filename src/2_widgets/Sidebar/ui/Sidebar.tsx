import classNames from 'classnames';
import { NavAside } from '3_features/NavAside';
import {
    dataUser,
    HeadAside,
} from '4_entities/User';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <HeadAside
                data={dataUser}
            />
            <NavAside />
        </div>
    );
};
