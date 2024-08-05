import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { ResponseType } from '5_shared/types/ServerResponse';

const pagePostApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPagePost: build.query<ResponseType, null>({
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
