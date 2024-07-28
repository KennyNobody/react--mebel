import classNames from 'classnames';
import {Checkbox, CheckboxType} from '5_shared/ui/Checkbox/Checkbox';
import cls from './FieldsGroup.module.scss';

interface FieldGroupType {
    id: number;
    title: string;
    items: CheckboxType[];
    type: 'checkbox-list' | 'text-list';
}

interface FieldsGroupProps {
    className?: string;
    data: FieldGroupType;
}

const FieldsGroup = (props: FieldsGroupProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <h3 className={classNames(cls.title)}>
                { data.title }
            </h3>
            <div className={classNames(cls.list)}>
                {
                    data.type === 'checkbox-list'
                    && (
                        data.items.map((item) => (
                            <Checkbox
                                key={item.id}
                                data={item}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export {
    FieldsGroup,
    type FieldGroupType,
};
