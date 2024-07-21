import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { AppResponseType } from '../types/MainResponseType';

const mainApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchMain: build.query<AppResponseType, null>({
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
