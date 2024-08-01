import classNames from 'classnames';

interface DateProps {
    data?: string;
    className?: string;
}

export const DateUI = (props: DateProps) => {
    const {
        data,
        className,
    } = props;

    if (!data) {
        return null;
    }

    const date = new Date(data);
    if (Number.isNaN(date.getTime())) {
        return null;
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы в JS начинаются с 0
    const year = date.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    return (
        <time className={classNames(className)}>
            { formattedDate }
        </time>
    );
};
