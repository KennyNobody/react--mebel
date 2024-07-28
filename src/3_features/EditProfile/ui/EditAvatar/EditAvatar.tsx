import classNames from 'classnames';
import { ButtonSelect } from '5_shared/ui/ButtonSelect/ButtonSelect';
import cls from './EditAvatar.module.scss';
import {Title} from "5_shared/ui/Title/Title";
import {useSelector} from "react-redux";
import {getUserData, UserType} from "4_entities/User";

interface EditAvatarProps {
    className?: string;
}

export const EditAvatar = (props: EditAvatarProps) => {
    const {
        className,
    } = props;

    const data: UserType | undefined = useSelector(getUserData);

    return (
        <div className={classNames(cls.block, className)}>
            <Title text="Аватар профиля" />
            <div className={classNames(cls.content)}>
                <picture className={classNames(cls.picture)}>
                    { data?.picture ? <img src={data.picture} alt="#" /> : 'X'}
                </picture>
                <div className={classNames(cls.main)}>
                    <ButtonSelect
                        caption="Выберите фото"
                        className={classNames(cls.button)}
                    />
                    <p className={classNames(cls.caption)}>
                        PNG, JPG 280x280 не больше 10 МБ.
                    </p>
                </div>
            </div>

        </div>
    );
};
