import classNames from 'classnames';
import { userActions, UserRole } from '4_entities/User';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import cls from './Temp.module.scss';

interface TempProps {
    className?: string
}

export const Temp = (props: TempProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const setRole = (role: UserRole) => {
        dispatch(userActions.setRole(role));
    };

    return (
        <div className={classNames(cls.block, className)}>
            <button className={classNames(cls.button)} onClick={() => setRole('client')}>
                Роль: клиент
            </button>
            <button className={classNames(cls.button)} onClick={() => setRole('worker')}>
                Роль: мебельщик
            </button>
        </div>
    );
};
