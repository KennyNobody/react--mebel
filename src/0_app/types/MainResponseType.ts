import { ImageType } from '5_shared/types/Image';
import { BaseResponseType } from '5_shared/types/CommonTypes';

export interface AppData {
    name: string | null;
    description: string | null;
    years: string | null;
    author: string | null;
    nickname: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    publishedAt: string | null;
    locale: string | null;
    preview?: {
        data: ImageType;
    },
    localizations: {
        data: any[];
    }
}

export interface AppResponseType extends Omit<BaseResponseType, 'data'> {
    data: BaseResponseType['data'] & { data: AppData };
}
