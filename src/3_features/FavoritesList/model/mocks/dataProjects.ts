import { FavoriteListType } from '../types/FavoriteListType';

const dataProjects: FavoriteListType = {
    list: [
        {
            id: 1,
            title: 'Проектирование и сборка шкафа',
            author: {
                id: 1,
                name: 'Петр',
                surname: 'Максимов',
                rating: 4.2,
                picture: 'https://placehold.co/600x600',
                link: 'https://www.mebelnica.ru/workers/654',
            },
            rating: 4.2,
            picture: 'https://placehold.co/600x600',
            link: 'https://www.mebelnica.ru/workers/654',
        },
        {
            id: 2,
            title: 'Сборка кухонного уголка',
            author: {
                id: 2,
                name: 'Жанкожа',
                surname: 'Бободжонов',
                rating: 3.7,
                picture: 'https://placehold.co/600x600',
                link: 'https://www.mebelnica.ru/workers/654',
            },
            rating: 3.7,
            picture: 'https://placehold.co/600x600',
            link: 'https://www.mebelnica.ru/workers/654',
        },
    ],
    meta: {
        pageCount: 2,
        pageNow: 2,
        pageSize: 3,
        total: 10,
    },
};

export {
    dataProjects,
};
