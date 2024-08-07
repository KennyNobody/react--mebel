import classNames from 'classnames';

enum DateMode {
    SHORT,
    FULL,
}

interface DateProps {
    data?: string;
    mode: DateMode;
    className?: string;
}

const DateUI = (props: DateProps) => {
    const {
        mode,
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

    let formattedDateTime = formattedDate;

    if (mode === DateMode.FULL) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        formattedDateTime = `${formattedDate} ${hours}:${minutes}`;
    }

    return (
        <time className={classNames(className)}>
            { formattedDateTime }
        </time>
    );
};

export {
    DateUI,
    DateMode,
};
