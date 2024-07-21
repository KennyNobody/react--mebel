import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './End.module.scss';

interface EndProps {
    className?: string;
    themeProp?: AppTheme;
}

export const End = (props: EndProps) => {
    const {
        themeProp,
        className,
    } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <p className={classNames(cls.block, cls[`editor--${themeProp || theme}`], className)}>
            { t('articlesMessage') }
        </p>
    );
};
