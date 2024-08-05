import { PersonType } from '4_entities/Person';
import { ProjectType } from '4_entities/Project';
import { PaginationType } from '5_shared/types/Pagination';

interface FavoriteListType {
    list: PersonType[] | ProjectType[];
    meta: PaginationType;
}

export {
    type FavoriteListType,
};
