import { PersonType } from '4_entities/Person';
import { PictureType } from '4_entities/Picture';

interface ReviewType {
    id: number;
    title: string;
    work: string;
    content: string;
    date: string;
    rating: number;
    user: PersonType;
    gallery: PictureType[];
}

export {
    type ReviewType,
};
