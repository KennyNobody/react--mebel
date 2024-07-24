import classNames from 'classnames';
import cls from './AddingProjectPage.module.scss';

interface AddingProjectPageProps {
    className?: string
}

export const AddingProjectPage = (props: AddingProjectPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            страница добавления проекта
        </div>
    );
};
