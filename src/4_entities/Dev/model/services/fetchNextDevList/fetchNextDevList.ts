import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import {
    getDevListPage,
    getDevListCount,
    getDevListPerPage,
    getDevListCategory,
} from '../../selectors/devList';
import { devListActions } from '../../slices/devListSlice';

interface FetchDevListProps {
    replace: boolean;
    getData: LazyQueryTrigger<any>,
}

export const fetchNextDevList = createAsyncThunk<void, FetchDevListProps, ThunkConfig<string>>(
    'devList/fetchNextDevList',
    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const { replace } = props;

        const perPage = getDevListPerPage(getState()) || 1;
        const listIndex = getDevListPage(getState()) || 1;
        const category = getDevListCategory(getState());
        const listLength = getDevListCount(getState());
        const pageNumber = listIndex === listLength ? listIndex : listIndex + 1;

        const params: RequestParams = {
            [PaginationParams.SIZE]: perPage,
            [PaginationParams.PAGE]: replace ? 1 : pageNumber,
            sort: 'publishedAt:DESC',
            populate: '*',
            replace,
        };

        if (category) {
            params[PaginationParams.TAG] = category;
        }

        await props.getData(params, true).then((response) => {
            // @ts-ignore
            const { data, meta } = response.data;
            const dataMethod = replace
                ? devListActions.replaceData
                : devListActions.addData;
            // @ts-ignore
            dispatch(dataMethod(data));
            // @ts-ignore
            dispatch(postListActions.setPagination(meta.pagination));
        });
    },
);
