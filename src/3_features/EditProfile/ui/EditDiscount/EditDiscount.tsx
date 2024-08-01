import classNames from 'classnames';
import {
    useRef,
    useState,
    useEffect,
    ChangeEvent,
    KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { Title } from '5_shared/ui/Title/Title';
import cls from './EditDiscount.module.scss';

interface EditDiscountProps {
    code: string;
    className?: string;
}

export const EditDiscount = (props: EditDiscountProps) => {
    const { code, className } = props;

    const initialDigits = code.split('').slice(0, 8).concat(Array(8 - code.length).fill(''));
    const [digits, setDigits] = useState<string[]>(initialDigits);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const newDigits = code.split('').slice(0, 8).concat(Array(8 - code.length).fill(''));
        setDigits(newDigits);
    }, [code]);

    const handleChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const newDigits = [...digits];
        newDigits[index] = event.target.value.slice(-1);
        setDigits(newDigits);

        if (event.target.value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number) => (event: ReactKeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && digits[index] === '') {
            if (index > 0) {
                const newDigits = [...digits];
                newDigits[index - 1] = '';
                setDigits(newDigits);
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <div className={classNames(cls.block, className)}>
            <Title text="Номер карты скидок в Балтламинат" />
            <div className={classNames(cls.wrapper)}>
                {digits.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        placeholder="-"
                        onChange={handleChange(index)}
                        onKeyDown={handleKeyDown(index)}
                        className={classNames(cls.input)}
                        ref={(el) => { inputRefs.current[index] = el; }}
                    />
                ))}
            </div>
        </div>
    );
};
