import classNames from 'classnames';
import cls from './Sidebar.module.scss';
import {HeadAside} from "4_entities/User/ui/HeadAside/HeadAside";
import {dataUser} from "4_entities/User";
import {NavAside} from "3_features/NavAside/ui/NavAside";

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
            <NavAside role={dataUser.role} />
        </div>
    );
};
