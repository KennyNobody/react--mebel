import classNames from 'classnames';
import Icon from '5_shared/assets/icons/file.svg';
import cls from './ButtonSelect.module.scss';

interface ButtonSelectProps {
    caption: string;
    className?: string;
}

export const ButtonSelect = (props: ButtonSelectProps) => {
    const {
        caption,
        className,
    } = props;

    return (
        <button className={classNames(cls.block, className)}>
            <Icon className={classNames(cls.icon)} />
            <span className={classNames(cls.caption)}>
                { caption }
            </span>
        </button>
    );
};
