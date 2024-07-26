import classNames from 'classnames';
import { ButtonLinkTheme } from '5_shared/ui/ButtonLink/ButtonLink';
import cls from './ButtonRegular.module.scss';

enum ButtonRegularTheme {
    GREEN = 'green',
}

interface ButtonRegularProps {
    caption: string;
    className?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    theme: ButtonLinkTheme;
    handleClick?: () => void;
}

const ButtonRegular = (props: ButtonRegularProps) => {
    const {
        theme,
        caption,
        className,
        isLoading,
        isDisabled,
        handleClick,
    } = props;

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isDisabled || isLoading}
            className={classNames(cls.block, cls[`block--${theme}`], className)}
        >
            { caption }
        </button>
    );
};

export {
    ButtonRegular,
    ButtonRegularTheme,
};
