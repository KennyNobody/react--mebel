import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ProjectType } from '4_entities/Project';
import cls from './ArticleProjectFavorite.module.scss';
import {AddFavorite} from "3_features/AddFavorite";
import {PersonSubHead} from "4_entities/Person/ui/PersonSubHead/PersonSubHead";

interface ArticleProjectFavoriteProps {
    className?: string;
    data: ProjectType;
}

export const ArticleProjectFavorite = (props: ArticleProjectFavoriteProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <article className={classNames(cls.block, className)}>
            <Link
                to={data.link}
                className={classNames(cls.picture)}
            >
                <img src={data.picture} alt={data.title} />
            </Link>
            <div className={classNames(cls.main)}>
                <Link to={data.link} className={classNames(cls.title)}>
                    { data.title }
                </Link>
                <PersonSubHead data={data.author} />
            </div>
            <div className={classNames(cls.controls)}>
                <AddFavorite
                    id={data.id}
                    mode="remove"
                    type="project"
                />
            </div>
        </article>
    );
};
