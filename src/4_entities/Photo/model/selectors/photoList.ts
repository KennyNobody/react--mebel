import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getPhotoListLoading = (state: StateSchema) => state?.photoList?.isLoading;
export const getPhotoListPerPage = (state: StateSchema) => state?.photoList?.perPage;
export const getPhotoListPage = (state: StateSchema) => state?.photoList?.page;
export const getPhotoListCount = (state: StateSchema) => state?.photoList?.count;
