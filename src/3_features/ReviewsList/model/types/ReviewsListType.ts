import { ReviewType } from '4_entities/Review';
import { PaginationType } from '5_shared/types/Pagination';

interface ReviewsListType {
    list: ReviewType[];
    meta: PaginationType;
}

export {
    type ReviewsListType,
};
