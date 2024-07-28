import classNames from 'classnames';
import { Title } from '5_shared/ui/Title/Title';
import { InputTextCaption } from '5_shared/ui/InputTextCaption/InputTextCaption';
import cls from './EditInfo.module.scss';
import { UserType } from '4_entities/User';
import {useSelector} from "react-redux";
import {getUserData} from "4_entities/User/model/selectors/getUser";

interface EditInfoProps {
    className?: string;
}

export const EditInfo = (props: EditInfoProps) => {
    const {
        className,
    } = props;

    const data: UserType | undefined = useSelector(getUserData);

    if (!data) return <div>Нет данных пользователя</div>;

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
