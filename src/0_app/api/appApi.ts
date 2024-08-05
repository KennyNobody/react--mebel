import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { ResponseType } from '5_shared/types/ServerResponse';

const mainApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchMain: build.query<ResponseType, null>({
            query: () => ({
                url: Routes.MAIN,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchMain = mainApi.useFetchMainQuery;

export {
    mainApi,
    useFetchMain,
};
