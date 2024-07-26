import { FieldGroupType } from '5_shared/ui/FieldsGroup/ui/FieldsGroup';

interface ProfileDataType {
    items: FieldGroupType[];
}

const profileData: ProfileDataType = {
    items: [
        {
            id: 1,
            type: 'checkbox-list',
            title: 'Стиль мебели',
            items: [
                {
                    id: 1,
                    title: 'Классический',
                    name: 'style',
                    value: 'classic',
                },
                {
                    id: 2,
                    title: 'Кантри',
                    name: 'style',
                    value: 'country',
                },
                {
                    id: 3,
                    title: 'Современный',
                    name: 'style',
                    value: 'modern',
                },
                {
                    id: 4,
                    title: 'Дизайнерский',
                    name: 'style',
                    value: 'design',
                },
                {
                    id: 5,
                    title: 'Лофт',
                    name: 'style',
                    value: 'loft',
                },
                {
                    id: 6,
                    title: 'Другое',
                    name: 'style',
                    value: 'other',
                },
            ],
        },
        {
            id: 2,
            type: 'checkbox-list',
            title: 'Виды работ',
            items: [
                {
                    id: 1,
                    title: 'Весь комплекс услуг',
                    name: 'work-type',
                    value: 'full',
                },
                {
                    id: 2,
                    title: 'Замер',
                    name: 'work-type',
                    value: 'froze',
                },
                {
                    id: 3,
                    title: 'Дизайн мебели',
                    name: 'work-type',
                    value: 'design',
                },
                {
                    id: 4,
                    title: 'Сборка и установка',
                    name: 'work-type',
                    value: 'assemblage',
                },
                {
                    id: 5,
                    title: 'Ремонт мебели',
                    name: 'work-type',
                    value: 'repair',
                },
            ],
        },
        {
            id: 3,
            type: 'text-list',
            title: 'График работ',
            items: [
                // {
                //     id: 1,
                //     title: 'Весь комплекс услуг',
                //     name: 'work-type',
                //     value: 'full',
                // },
            ],
        },
        {
            id: 4,
            type: 'checkbox-list',
            title: 'Ценовой сегмент, с которым вы работаете',
            items: [
                {
                    id: 1,
                    title: 'Эконом',
                    name: 'price',
                    value: 'economy',
                },
                {
                    id: 2,
                    title: 'Средний+',
                    name: 'price',
                    value: 'average-plus',
                },
                {
                    id: 3,
                    title: 'Средний',
                    name: 'price',
                    value: 'average',
                },
                {
                    id: 4,
                    title: 'Премиум',
                    name: 'price',
                    value: 'premium',
                },
            ],
        },
        {
            id: 5,
            type: 'checkbox-list',
            title: 'Виды мебели',
            items: [
                {
                    id: 1,
                    title: 'Кухня',
                    name: 'furniture-type',
                    value: 'kitchen',
                },
                {
                    id: 2,
                    title: 'Шкаф',
                    name: 'furniture-type',
                    value: 'closet',
                },
                {
                    id: 3,
                    title: 'Компьютерный стол',
                    name: 'furniture-type',
                    value: 'computer-desk',
                },
                {
                    id: 4,
                    title: 'Прихожая',
                    name: 'furniture-type',
                    value: 'hallway',
                },
                {
                    id: 5,
                    title: 'Полка',
                    name: 'furniture-type',
                    value: 'shelf',
                },
                {
                    id: 6,
                    title: 'Комод / Тумба',
                    name: 'furniture-type',
                    value: 'chest-nightstand',
                },
                {
                    id: 7,
                    title: 'Стенка',
                    name: 'furniture-type',
                    value: 'wall',
                },
                {
                    id: 8,
                    title: '',
                    name: 'furniture-type',
                    value: '',
                },
                {
                    id: 9,
                    title: 'Стеллаж',
                    name: 'furniture-type',
                    value: 'rack',
                },
                {
                    id: 10,
                    title: 'Другое',
                    name: 'furniture-type',
                    value: 'other',
                },
            ],
        },
    ],
};

export {
    profileData,
};
