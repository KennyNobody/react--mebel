import { PersonWorkerType } from '4_entities/Person';

interface ProjectType {
    id: number;
    title: string;
    author: PersonWorkerType;
    picture: string;
    rating: number;
    link: string;
}

export {
    type ProjectType,
};
