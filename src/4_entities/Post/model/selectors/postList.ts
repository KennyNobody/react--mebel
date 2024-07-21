import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getPostListLoading = (state: StateSchema) => state?.postList?.isLoading;
export const getPostListPerPage = (state: StateSchema) => state?.postList?.perPage;
export const getPostListPage = (state: StateSchema) => state?.postList?.page;
export const getPostListCount = (state: StateSchema) => state?.postList?.count;
export const getPostListCategory = (state: StateSchema) => state?.postList?.category;
