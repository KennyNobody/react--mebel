import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { PageResponseType } from '5_shared/types/CommonTypes';

const pagePostApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPagePost: build.query<PageResponseType, null>({
            query: () => ({
                url: Routes.PAGE_POST,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchPagePost = pagePostApi.useFetchPagePostQuery;

export {
    pagePostApi,
    useFetchPagePost,
};
