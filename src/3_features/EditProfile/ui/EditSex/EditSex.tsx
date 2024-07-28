import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Radio } from '5_shared/ui/Radio/Radio';
import {
    UserType,
    getUserData,
} from '4_entities/User';
import cls from './EditSex.module.scss';

interface EditSexProps {
    className?: string;
}

export const EditSex = (props: EditSexProps) => {
    const {
        className,
    } = props;

    const data: UserType | undefined = useSelector(getUserData);

    if (!data) return <div>Нет данных пользователя</div>;

    return (
        <div className={classNames(cls.block, className)}>
            <h3 className={classNames(cls.title)}>
                Ваш пол
            </h3>
            <div className={classNames(cls.list)}>
                <Radio
                    name="sex"
                    value="мужской"
                    caption="Мужской"
                    checked={data.sex === 'мужской'}
                />
                <Radio
                    name="sex"
                    value="женский"
                    caption="Женский"
                    checked={data.sex === 'женский'}
                />
            </div>
        </div>
    );
};
