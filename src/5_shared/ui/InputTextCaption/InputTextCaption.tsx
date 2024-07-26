import classNames from 'classnames';
import cls from './InputTextCaption.module.scss';

interface InputTextCaptionProps {
    title: string;
    value?: string;
    message?: string;
    className?: string;
    placeholder?: string;
}

export const InputTextCaption = (props: InputTextCaptionProps) => {
    const {
        title,
        value,
        message,
        className,
        placeholder,
    } = props;

    return (
        <label className={classNames(cls.label, className)}>
            <div className={classNames(cls.wrapper)}>
                <input type="text" className={classNames(cls.field)} placeholder={placeholder || ''} value={value || ''} />
                <p className={classNames(cls.title)}>
                    { title }
                </p>
            </div>
            {
                message
                && (
                    <div className={classNames(cls.footer)}>
                        { message }
                    </div>
                )
            }
        </label>
    );
};
