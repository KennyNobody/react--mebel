import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { ResponseType } from '5_shared/types/ServerResponse';

const pageDevApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPageDev: build.query<ResponseType, null>({
            query: () => ({
                url: Routes.PAGE_DEV,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchPageDev = pageDevApi.useFetchPageDevQuery;

export {
    pageDevApi,
    useFetchPageDev,
};
