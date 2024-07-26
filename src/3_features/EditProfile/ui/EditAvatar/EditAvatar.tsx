import classNames from 'classnames';
import { ButtonSelect } from '5_shared/ui/ButtonSelect/ButtonSelect';
import cls from './EditAvatar.module.scss';
import {Title} from "5_shared/ui/Title/Title";

interface EditAvatarProps {
    picture: string;
    className?: string;
}

export const EditAvatar = (props: EditAvatarProps) => {
    const {
        picture,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Title text="Аватар профиля" />
            <div className={classNames(cls.content)}>
                <picture className={classNames(cls.picture)}>
                    { picture ? <img src={picture} alt="#" /> : 'X'}
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
