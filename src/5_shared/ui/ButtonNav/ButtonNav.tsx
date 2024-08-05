import classNames from 'classnames';
import cls from './ButtonNav.module.scss';

interface ButtonNavProps {
    caption: string;
    isActive?: boolean;
    className?: string;
    clickEvent: () => void;
}

export const ButtonNav = (props: ButtonNavProps) => {
    const {
        caption,
        isActive,
        clickEvent,
        className,
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(
                    cls.block,
                    { [cls.active]: isActive },
                    className,
                )
            }
            onClick={clickEvent}
        >
            { caption }
        </button>
    );
};
