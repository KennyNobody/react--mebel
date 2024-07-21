import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './Error.module.scss';

interface ErrorProps {
    className?: string
}

export const Error = (props: ErrorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();

    return (
        <div className={classNames(cls.Error, className)}>
            Все сломалось. Я потом починю.
            <button
                type="button"
                onClick={reloadPage}
            >
                { t('reloadPage') }
            </button>
        </div>
    );
};
