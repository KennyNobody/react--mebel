import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';
import cls from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    caption: string;
}

export const Radio = (props: RadioProps) => {
    const {
        caption,
        className,
        ...otherProps
    } = props;

    return (
        <label className={classNames(cls.block, className)}>
            <input
                type="radio"
                {...otherProps}
                className={classNames(cls.field)}
            />
            <div className={classNames(cls.circle)}>
                <span className={classNames(cls.dot)}></span>
            </div>
            <span className={classNames(cls.text)}>
                { caption }
            </span>
        </label>
    );
};
