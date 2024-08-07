import classNames from 'classnames';
import cls from './ReviewsList.module.scss';
import { dataReviews } from '../../model/mocks/dataReviews';
import {TabsWrapper} from "5_shared/ui/TabsWrapper/TabsWrapper";
import {ButtonNav} from "5_shared/ui/ButtonNav/ButtonNav";
import {Pagination} from "5_shared/ui/Pagination/Pagination";
import {ArticleReview} from "4_entities/Review";

interface ReviewsListProps {
    className?: string
}

export const ReviewsList = (props: ReviewsListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <TabsWrapper className={classNames(cls.nav)}>
                <ButtonNav
                    isActive
                    caption="Все"
                    clickEvent={() => console.log('Пык')}
                />
                <ButtonNav
                    caption="Недавние"
                    clickEvent={() => console.log('Пык')}
                />
                <ButtonNav
                    caption="Старые"
                    clickEvent={() => console.log('Пык')}
                />
            </TabsWrapper>
            <div className={classNames(cls.list)}>
                {
                    dataReviews.list.map((item) => <ArticleReview data={item} key={item.id} />)
                }
            </div>
            <Pagination
                lastPage={14}
                currentPage={2}
                className={classNames(cls.pagination)}
            />
        </div>
    );
};
