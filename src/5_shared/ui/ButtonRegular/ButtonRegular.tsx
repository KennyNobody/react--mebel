import { ReactNode } from 'react';
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
    children?: ReactNode;
    isDisabled?: boolean;
    theme: ButtonLinkTheme;
    handleClick?: () => void;
    contentPosition?: 'left' | 'right';
}

const ButtonRegular = (props: ButtonRegularProps) => {
    const {
        theme,
        caption,
        children,
        className,
        isLoading,
        isDisabled,
        handleClick,
        contentPosition,
    } = props;

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isDisabled || isLoading}
            className={classNames(cls.block, cls[`block--${theme}`], className)}
        >
            {
                children
                && contentPosition === 'left'
                && children
            }
            { caption }
            {
                children
                && contentPosition === 'right'
                && children
            }
        </button>
    );
};

export {
    ButtonRegular,
    ButtonRegularTheme,
};
