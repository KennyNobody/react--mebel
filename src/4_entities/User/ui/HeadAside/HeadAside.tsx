import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { UserType } from '4_entities/User';
import IconNext from '5_shared/assets/icons/arrow-next.svg';
import cls from './HeadAside.module.scss';
import {RouterPath} from "5_shared/config/router/routerConfig";

interface HeadAsideProps {
    data: UserType;
    className?: string;
}

export const HeadAside = (props: HeadAsideProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Link to={RouterPath.main} className={classNames(cls.block, className)}>
            <picture className={classNames(cls.picture)}>
                {
                    data?.picture
                    && (
                        <img src={data.picture} alt={`${data.surname} ${data.name}`} />
                    )
                }
            </picture>
            <div className={classNames(cls.main)}>
                <p className={classNames(cls.profileCaption)}>Профиль</p>
                <p className={classNames(cls.name)}>
                    {data.surname}
                    {' '}
                    {data.name}
                </p>
            </div>
            <IconNext
                className={classNames(cls.icon)}
            />
        </Link>
    );
};
