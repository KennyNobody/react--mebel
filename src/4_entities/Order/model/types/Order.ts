import { FileType } from '4_entities/File';
import { PictureType } from '4_entities/Picture';

type OrderStatus = 'нет исполнителя' | 'в работе' | 'ждет проверки' | 'выполнено';

interface OrderType {
    id: number;
    title: string;
    status: OrderStatus;
    createDate: string; // 2024-05-20T15:30:00
    messageCounter: number;
    price: number;
    typeOrder: string;
    priceSegment: string;
    typeWork: string;
    style: string;
    orderDescription: string;
    files: FileType[];
    gallery: PictureType[];
}

export type {
    OrderType,
    OrderStatus,
};
