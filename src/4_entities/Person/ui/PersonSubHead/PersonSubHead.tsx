import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { PersonType } from '4_entities/Person';
import cls from './PersonSubHead.module.scss';
import {RatingIcons} from "5_shared/ui/RatingIcons/RatingIcons";

interface PersonSubHeadProps {
    className?: string;
    data: PersonType;
}

export const PersonSubHead = (props: PersonSubHeadProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Link to={data.link} className={classNames(cls.block, className)}>
            <picture className={classNames(cls.picture)}>
                <img src={data.picture} alt={`${data.surname} ${data.name}`} />
            </picture>
            <div className={classNames(cls.main)}>
                <p className={classNames(cls.name)}>
                    {`${data.surname} ${data.name}`}
                </p>
                <RatingIcons rating={data.rating} />
            </div>
        </Link>
    );
};
