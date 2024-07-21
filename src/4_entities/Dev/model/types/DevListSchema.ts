import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticleDevType } from './ArticleDev';

export interface DevListSchema extends EntityState<ArticleDevType> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
    category: number | undefined;
}
