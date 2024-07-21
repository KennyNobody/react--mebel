export {
    GridPosts,
} from './ui/GridPosts/GridPosts';

export type {
    PostArticleType,
} from './model/types/PostArticle';

export {
    postApi,
    useFetchPostById,
    useLazyFetchPostList,
} from './api/postApi';

export {
    getPostList,
    postListReducer,
    postListActions,
} from './model/slices/postListSlice';

export {
    fetchNextPostList,
} from './model/services/fetchNextPostList/fetchNextPostList';

export {
    initPostList,
} from './model/services/initPostList/initPostList';

export {
    getPostListCount,
    getPostListLoading,
    getPostListPage,
    getPostListCategory,
} from './model/selectors/postList';

export type {
    PostListSchema,
} from './model/types/PostListSchema';
