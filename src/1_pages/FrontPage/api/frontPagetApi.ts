import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { PageResponseType } from '5_shared/types/CommonTypes';

const pageFrontApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPageFront: build.query<PageResponseType, null>({
            query: () => ({
                url: Routes.PAGE_FRONT,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchPageFront = pageFrontApi.useFetchPageFrontQuery;

export {
    pageFrontApi,
    useFetchPageFront,
};
