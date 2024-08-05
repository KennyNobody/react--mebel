import { PersonType } from '4_entities/Person';

interface ProjectType {
    id: number;
    title: string;
    author: PersonType;
    picture: string;
    rating: number;
    link: string;
}

export {
    type ProjectType,
};
