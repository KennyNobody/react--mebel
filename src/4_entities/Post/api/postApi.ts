import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { BaseResponseType } from '5_shared/types/CommonTypes';

const postApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPostList: build.query({
            query: (params) => ({
                url: Routes.POSTS_LIST,
                params: {
                    ...params,
                    populate: 'main.preview,category',
                },
            }),
            providesTags: ['post'],
        }),
        fetchPostById: build.query({
            query: (id: string) => ({
                url: `${Routes.POSTS_LIST}/${id}/`,
                params: {
                    populate: 'main.preview,tags,category,seo',
                },
            }),
            providesTags: ['postSingle'],
            transformResponse: (response: BaseResponseType) => response.data,
        }),
    }),
    overrideExisting: false,
});

const useFetchPostById = postApi.useFetchPostByIdQuery;
const useLazyFetchPostList = postApi.useLazyFetchPostListQuery;

export {
    postApi,
    useFetchPostById,
    useLazyFetchPostList,
};
