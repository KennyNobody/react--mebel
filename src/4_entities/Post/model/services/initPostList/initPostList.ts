import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import { postListActions } from '../../slices/postListSlice';
import { getPostListPerPage } from '../../selectors/postList';

export const initPostList = createAsyncThunk<void, LazyQueryTrigger<any>, ThunkConfig<string>>(
    'postList/initPostList',
    async (getData, thunkAPI) => {
        const {
            dispatch,
            getState,
        } = thunkAPI;

        const perPage = getPostListPerPage(getState()) || 1;

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
            dispatch(postListActions.addData(data));
            // @ts-ignore
            dispatch(postListActions.setPagination(meta.pagination));
        });
    },
);
