import classNames from 'classnames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Боковая панель
        </div>
    );
};
