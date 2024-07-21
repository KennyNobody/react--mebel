import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { BaseResponseType } from '5_shared/types/CommonTypes';

const devApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchDevList: build.query({
            query: (params) => ({
                url: Routes.DEVS_LIST,
                params,
            }),
            providesTags: ['dev'],
        }),
        fetchDevById: build.query({
            query: (id: string) => ({
                url: `${Routes.DEVS_LIST}/${id}/`,
                params: {
                    populate: 'main.preview,tags,category',
                },
            }),
            providesTags: ['devSingle'],
            transformResponse: (response: BaseResponseType) => response.data,
        }),
    }),
    overrideExisting: false,
});

const useFetchDevById = devApi.useFetchDevByIdQuery;
const useLazyFetchDevList = devApi.useLazyFetchDevListQuery;

export {
    devApi,
    useFetchDevById,
    useLazyFetchDevList,
};
