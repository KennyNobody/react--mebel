import classNames from 'classnames';
import Icon from '5_shared/assets/icons/favorite-fill.svg';
import cls from './ButtonFavorite.module.scss';

interface ButtonFavoriteProps {
    className?: string;
    clickEvent: () => void;
}

export const ButtonFavorite = (props: ButtonFavoriteProps) => {
    const {
        className,
        clickEvent,
    } = props;

    return (
        <button
            onClick={clickEvent}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Icon
                className={classNames(cls.icon)}
            />
        </button>
    );
};
