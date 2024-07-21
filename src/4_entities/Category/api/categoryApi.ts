import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { CategoryMode } from '../model/types/CategoryMode';

const categoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCategoryList: build.query({
            query: (mode: CategoryMode) => ({
                url: mode === CategoryMode.DEV ? Routes.DEV_TAG_LIST : Routes.POST_CAT_LIST,
                params: {
                    _limit: 99,
                },
            }),
            providesTags: ['category'],
        }),
    }),
    overrideExisting: false,
});

const useFetchCategoryList = categoryApi.useFetchCategoryListQuery;

export {
    categoryApi,
    useFetchCategoryList,
};
