import { ProjectType } from '4_entities/Project';
import { PersonWorkerType } from '4_entities/Person';
import { PaginationType } from '5_shared/types/Pagination';

interface FavoriteListType {
    list: PersonWorkerType[] | ProjectType[];
    meta: PaginationType;
}

export {
    type FavoriteListType,
};
