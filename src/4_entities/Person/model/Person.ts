interface PersonType {
    id: number;
    name: string;
    surname: string;
    picture: string;
}

interface PersonWorkerType extends PersonType {
    link: string;
    rating: number;
    online?: boolean;
}

export type {
    PersonType,
    PersonWorkerType,
};
