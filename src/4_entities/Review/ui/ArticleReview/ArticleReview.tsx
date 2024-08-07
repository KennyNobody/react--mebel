import classNames from 'classnames';
import {PersonSubHead} from '4_entities/Person';
import cls from './ArticleReview.module.scss';
import {ReviewType} from '../../model/types/Review';
import {Editor} from "5_shared/ui/Editor/Editor";
import {DateMode, DateUI} from "5_shared/ui/Date/DateUI";
import {PictureSmallGallery} from "4_entities/Picture";

interface ArticleReviewProps {
    className?: string;
    data: ReviewType;
}

export const ArticleReview = (props: ArticleReviewProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <article className={classNames(cls.block, className)}>
            <PersonSubHead
                rating={data.rating}
                data={data.user}
            />
            <div className={classNames(cls.info)}>
                <span className={classNames(cls.title)}>
                    { data.title }
                </span>
                <span className={classNames(cls.work)}>
                    { data.work }
                </span>
            </div>
            <div className={classNames(cls.editor)}>
                <Editor data={data.content} />
            </div>
            <PictureSmallGallery
                data={data.gallery}
            />
            <DateUI
                data={data.date}
                mode={DateMode.FULL}
                className={classNames(cls.date)}
            />
        </article>
    );
};
