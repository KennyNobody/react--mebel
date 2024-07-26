import classNames from 'classnames';
import { Title } from '5_shared/ui/Title/Title';
import { InputTextCaption } from '5_shared/ui/InputTextCaption/InputTextCaption';
import cls from './EditInfo.module.scss';
import { UserType } from '4_entities/User';

interface EditInfoProps {
    data: UserType;
    className?: string;
}

export const EditInfo = (props: EditInfoProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Title text="Основная информация" />
            <div className={classNames(cls.list)}>
                <InputTextCaption
                    title="Фамилия"
                    value={data.surname || ''}
                />
                <InputTextCaption
                    title="Имя"
                    value={data.name || ''}
                />
                <InputTextCaption
                    title="Телефон"
                    value={data.tel || ''}
                />
                <InputTextCaption
                    title="Email"
                    value={data.email || ''}
                />
            </div>
        </div>
    );
};
