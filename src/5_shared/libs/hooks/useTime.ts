import {
    useState,
    useEffect,
} from 'react';

const useFormattedDate = (timeStamp: Date, lang: string): string => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        if (!timeStamp) {
            setFormattedDate('');
            return;
        }

        const date = new Date(timeStamp);
        if (Number.isNaN(date.getTime())) {
            setFormattedDate('');
            return;
        }

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const formattedString = date.toLocaleDateString(lang, options);
        setFormattedDate(lang === 'ru' ? formattedString.slice(0, -3) : formattedString);
    }, [timeStamp, lang]);

    return formattedDate;
};

export default useFormattedDate;
