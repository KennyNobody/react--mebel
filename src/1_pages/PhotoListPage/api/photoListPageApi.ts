import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { ResponseType } from '5_shared/types/ServerResponse';

const pagePhotoApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPagePhoto: build.query<ResponseType, null>({
            query: () => ({
                url: Routes.PAGE_PHOTO,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchPagePhoto = pagePhotoApi.useFetchPagePhotoQuery;

export {
    pagePhotoApi,
    useFetchPagePhoto,
};
