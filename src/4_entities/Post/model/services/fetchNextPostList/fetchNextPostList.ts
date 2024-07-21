import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import {
    getPostListPage,
    getPostListCount,
    getPostListPerPage,
    getPostListCategory,
} from '../../selectors/postList';
import { postListActions } from '../../slices/postListSlice';

interface FetchPostListPageProps {
    replace: boolean;
    getData: LazyQueryTrigger<any>,
}

export const fetchNextPostList = createAsyncThunk<void, FetchPostListPageProps, ThunkConfig<string>>(
    'postList/fetchNextPostList',
    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const { replace } = props;

        const perPage = getPostListPerPage(getState()) || 1;
        const listIndex = getPostListPage(getState()) || 1;
        const category = getPostListCategory(getState());
        const listLength = getPostListCount(getState());
        const pageNumber = listIndex === listLength ? listIndex : listIndex + 1;

        const params: RequestParams = {
            [PaginationParams.SIZE]: perPage,
            [PaginationParams.PAGE]: replace ? 1 : pageNumber,
            sort: 'publishedAt:DESC',
            populate: '*',
            replace,
        };

        if (category) {
            params[PaginationParams.CAT] = category;
        }

        await props.getData(params, true).then((response) => {
            // @ts-ignore
            const { data, meta } = response.data;
            const dataMethod = replace
                ? postListActions.replaceData
                : postListActions.addData;
            // @ts-ignore
            dispatch(dataMethod(data));
            // @ts-ignore
            dispatch(postListActions.setPagination(meta.pagination));
        });
    },
);
