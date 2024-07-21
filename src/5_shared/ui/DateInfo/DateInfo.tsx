import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import useTime from '5_shared/libs/hooks/useTime';
import cls from './DateInfo.module.scss';

interface DateProps {
    date: Date;
    className?: string
}

export const DateInfo = (props: DateProps) => {
    const {
        date,
        className,
    } = props;

    const { i18n } = useTranslation();
    const lang = i18n.language;
    const time = useTime(date, lang);

    return (
        <time className={classNames(cls.block, className)}>
            { time }
        </time>
    );
};
