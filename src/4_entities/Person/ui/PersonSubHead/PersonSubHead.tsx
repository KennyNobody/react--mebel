import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { PersonType, PersonWorkerType } from '4_entities/Person';
import { RatingIcons } from '5_shared/ui/RatingIcons/RatingIcons';
import cls from './PersonSubHead.module.scss';

interface PersonSubHeadProps {
    rating: number;
    className?: string;
    data: PersonType | PersonWorkerType;
}

export const PersonSubHead = (props: PersonSubHeadProps) => {
    const {
        data,
        rating,
        className,
    } = props;

    return (
        <article className={classNames(cls.block, className)}>
            <picture className={classNames(cls.picture)}>
                <img src={data.picture} alt={`${data.surname} ${data.name}`} />
            </picture>
            <div className={classNames(cls.main)}>
                <p className={classNames(cls.name)}>
                    {`${data.surname} ${data.name}`}
                </p>
                <RatingIcons rating={rating} />
            </div>
        </article>
    );
};
