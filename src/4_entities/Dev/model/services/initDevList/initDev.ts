import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import { devListActions } from '../../slices/devListSlice';
import { getDevListPerPage } from '../../selectors/devList';

export const initDev = createAsyncThunk<void, LazyQueryTrigger<any>, ThunkConfig<string>>(
    'devList/initDevList',
    async (getData, thunkAPI) => {
        const {
            dispatch,
            getState,
        } = thunkAPI;

        const perPage = getDevListPerPage(getState()) || 1;

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
            dispatch(devListActions.addData(data));
            // @ts-ignore
            dispatch(devListActions.setPagination(meta.pagination));
        });
    },
);
