import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getDevListLoading = (state: StateSchema) => state?.devList?.isLoading;
export const getDevListPerPage = (state: StateSchema) => state?.devList?.perPage;
export const getDevListPage = (state: StateSchema) => state?.devList?.page;
export const getDevListCount = (state: StateSchema) => state?.devList?.count;
export const getDevListCategory = (state: StateSchema) => state?.devList?.category;
