import { EntityState } from '@reduxjs/toolkit';
import { PostArticleType } from '4_entities/Post';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface PostListSchema extends EntityState<PostArticleType> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
    category: number | undefined;
}
