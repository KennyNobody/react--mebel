import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRouter } from '5_shared/config/router/routerConfig';
import cls from './ButtonLink.module.scss';

enum ButtonLinkTheme {
    GREEN = 'green',
}

interface ButtonLinkProps {
    caption: string;
    link: AppRouter | string;
    theme: ButtonLinkTheme;
    className?: string;
}

const ButtonLink = (props: ButtonLinkProps) => {
    const {
        caption,
        link,
        theme,
        className,
    } = props;

    return (
        <Link to={link} className={classNames(cls.block, cls[`block--${theme}`], className)}>
            { caption }
        </Link>
    );
};

export {
    ButtonLinkTheme,
    ButtonLink,
}
