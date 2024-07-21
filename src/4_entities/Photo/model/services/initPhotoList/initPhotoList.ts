import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import { photoListActions } from '../../slices/photoListSlice';
import { getPhotoListPerPage } from '../../selectors/photoList';

export const initPhotoList = createAsyncThunk<void, LazyQueryTrigger<any>, ThunkConfig<string>>(
    'photoList/initPhotoList',
    async (getData, thunkAPI) => {
        const {
            dispatch,
            getState,
        } = thunkAPI;

        const perPage = getPhotoListPerPage(getState()) || 1;

        const params: RequestParams = {
            [PaginationParams.PAGE]: 1,
            [PaginationParams.SIZE]: perPage,
            sort: 'publishedAt:DESC',
            replace: false,
            populate: '*',
        };

        await getData(params, true).then((response) => {
            // @ts-ignore
            const { data, meta } = response.data;
            dispatch(photoListActions.addData(data));
            // @ts-ignore
            dispatch(photoListActions.setPagination(meta.pagination));
        });
    },
);
