import { Media } from '4_entities/Media';

enum ContentKeyType {
    DEV = 'dev',
    PHOTO = 'photo',
    POST = 'post',
}

interface BaseResponseType {
    data: any;
    meta: any;
}

interface MetaSocial {
    title: string;
    description: string;
    image?: { data: Media };
}

interface MetaPageType {
    metaTitle: string;
    metaDescription: string;
    metaImage?: { data: Media };
    metaSocial: MetaSocial[];
    keywords?: string;
    metaRobots?: string;
    structuredData?: any;
    metaViewport?: string;
    canonicalURL?: string;
}

interface PageResponseType {
    data: {
        title: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        localizations: {
            data: [any],
        };
        seo: MetaPageType;
    };
    meta: any;
}

export {
    ContentKeyType,
    type MetaSocial,
    type MetaPageType,
    type BaseResponseType,
    type PageResponseType,
};
