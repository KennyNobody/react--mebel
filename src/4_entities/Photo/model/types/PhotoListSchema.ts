import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticlePhotoType } from './ArticlePhoto';

export interface PhotoListSchema extends EntityState<ArticlePhotoType> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
}
