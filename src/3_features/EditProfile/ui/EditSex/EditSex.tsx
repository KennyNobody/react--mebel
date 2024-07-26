import classNames from 'classnames';
import { Radio } from '5_shared/ui/Radio/Radio';
import cls from './EditSex.module.scss';

interface EditSexProps {
    data: string;
    className?: string;
}

export const EditSex = (props: EditSexProps) => {
    const {
        data,
        className,
    } = props;

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
                    checked={data === 'мужской'}
                />
                <Radio
                    name="sex"
                    value="женский"
                    caption="Женский"
                    checked={data === 'женский'}
                />
            </div>
        </div>
    );
};
