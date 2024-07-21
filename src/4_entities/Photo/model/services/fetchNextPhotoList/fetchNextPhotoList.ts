import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import {
    getPhotoListPage,
    getPhotoListCount,
    getPhotoListPerPage,
} from '../../selectors/photoList';
import { photoListActions } from '../../slices/photoListSlice';

interface FetchPhotoListPageProps {
    replace: boolean;
    getData: LazyQueryTrigger<any>,
}

export const fetchNextPhotoList = createAsyncThunk<void, FetchPhotoListPageProps, ThunkConfig<string>>(
    'photoList/fetchNextPhotoList',
    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const { replace } = props;

        const perPage = getPhotoListPerPage(getState()) || 1;
        const listIndex = getPhotoListPage(getState()) || 1;
        const listLength = getPhotoListCount(getState());
        const pageNumber = listIndex === listLength ? listIndex : listIndex + 1;

        const params: RequestParams = {
            [PaginationParams.SIZE]: perPage,
            [PaginationParams.PAGE]: replace ? 1 : pageNumber,
            sort: 'publishedAt:DESC',
            populate: '*',
            replace,
        };

        await props.getData(params, true).then((response) => {
            // @ts-ignore
            const { data, meta } = response.data;
            const dataMethod = replace
                ? photoListActions.replaceData
                : photoListActions.addData;
            // @ts-ignore
            dispatch(dataMethod(data));
            // @ts-ignore
            dispatch(photoListActions.setPagination(meta.pagination));
        });
    },
);
