import { ArticleCategoryType } from '4_entities/Category';
import { DetailMainType } from '5_shared/types/DetailMainContent';

interface PostArticleType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    main: DetailMainType;
    tags?: {
        data: ArticleCategoryType[];
    };
    category?: {
        data: ArticleCategoryType;
    };
}

export type {
    PostArticleType,
};
