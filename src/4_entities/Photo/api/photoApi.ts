import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { BaseResponseType } from '5_shared/types/CommonTypes';

const photoApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPhotoList: build.query({
            query: (params) => ({
                url: Routes.PHOTO_LIST,
                params: {
                    ...params,
                    populate: 'main.preview',
                },
            }),
            providesTags: ['photo'],
        }),
        fetchPhotoById: build.query({
            query: (id: string) => ({
                url: `${Routes.PHOTO_LIST}/${id}/`,
                params: {
                    populate: 'main.preview',
                },
            }),
            providesTags: ['photoSingle'],
            transformResponse: (response: BaseResponseType) => response.data,
        }),
    }),
    overrideExisting: false,
});

const useFetchPhotoById = photoApi.useFetchPhotoByIdQuery;
const useLazyFetchPhotoList = photoApi.useLazyFetchPhotoListQuery;

export {
    photoApi,
    useFetchPhotoById,
    useLazyFetchPhotoList,
};
