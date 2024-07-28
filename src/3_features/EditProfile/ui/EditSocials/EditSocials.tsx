import classNames from 'classnames';
import cls from './EditSocials.module.scss';
import {Title} from "5_shared/ui/Title/Title";
import {InputTextCaption} from "5_shared/ui/InputTextCaption/InputTextCaption";
import {getUserData, UserType} from "4_entities/User";
import {useSelector} from "react-redux";

interface EditSocialsProps {
    className?: string
}

export const EditSocials = (props: EditSocialsProps) => {
    const { className } = props;

    const data: UserType | undefined = useSelector(getUserData);

    if (!data) return <div>Нет данных пользователя</div>;

    return (
        <div className={classNames(cls.block, className)}>
            <Title text="Ссылки на социальные сети" />
            <div className={classNames(cls.list)}>
                <InputTextCaption
                    title="Вконтакте"
                    value={data?.socials?.vk || ''}
                />
                <InputTextCaption
                    title="Телеграм"
                    value={data?.socials?.tg || ''}
                />
                <InputTextCaption
                    title="Инстаграм"
                    value={data?.socials?.inst || ''}
                />
            </div>
        </div>
    );
};
