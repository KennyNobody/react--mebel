import classNames from 'classnames';
import Icon from '5_shared/assets/icons/check.svg';
import cls from './Checkbox.module.scss';

interface CheckboxType {
    id: number;
    title: string;
    name: string;
    value: string;
}

interface CheckboxProps {
    className?: string;
    data: CheckboxType;
    isChecked?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
    const {
        isChecked,
        data,
        className,
    } = props;

    return (
        <label className={classNames(cls.block, className)}>
            <input
                type="checkbox"
                name={data.name}
                value={data.value}
                checked={isChecked}
                className={classNames(cls.field)}
            />
            <div className={classNames(cls.box)}>
                <Icon className={classNames(cls.icon)} />
            </div>
            <span className={classNames(cls.text)}>
                { data.title }
            </span>
        </label>
    );
};

export {
    Checkbox,
    type CheckboxType,
};
