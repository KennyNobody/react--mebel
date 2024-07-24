import classNames from 'classnames';
import cls from './SettingsPage.module.scss';

interface SettingsPageProps {
    className?: string
}

export const SettingsPage = (props: SettingsPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.SettingsPage, className)}>
            Страница настроек
        </div>
    );
};
