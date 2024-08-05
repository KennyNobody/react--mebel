import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { ResponseType } from '5_shared/types/ServerResponse';

const pageFrontApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPageFront: build.query<ResponseType, null>({
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
