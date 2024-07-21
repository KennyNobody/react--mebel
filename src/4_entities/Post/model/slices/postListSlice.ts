import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import { PostArticleType } from '4_entities/Post';
import { postApi } from '../../api/postApi';
import { PostListSchema } from '../types/PostListSchema';

const postListAdapter = createEntityAdapter<PostArticleType>();
postListAdapter.selectId = (item: PostArticleType) => item.id;

export const getPostList = postListAdapter.getSelectors<StateSchema>(
    (state) => state.postList || postListAdapter.getInitialState(),
);

const initialState: PostListSchema = {
    page: 1,
    perPage: 8,
    isLoading: false,
    errors: undefined,
    category: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const postListSlice = createSlice({
    name: 'postListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLength: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        setPerPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload;
        },
        addData: (state, action: PayloadAction<PostArticleType[]>) => {
            postListAdapter.addMany(state, action.payload);
        },
        replaceData: (state, action: PayloadAction<PostArticleType[]>) => {
            postListAdapter.setAll(state, action.payload);
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            state.page = pagination.page;
            state.count = pagination.pageCount;
        },
        toggleCategory: (state, action: PayloadAction<number | undefined>) => {
            if (state.category === action.payload) {
                state.category = undefined;
            } else {
                state.category = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        const request = postApi.endpoints.fetchPostList;

        builder
            .addMatcher(request.matchPending, (state, action) => {
                const { replace } = action.meta.arg.originalArgs;
                if (replace) postListAdapter.removeAll(state);

                state.errors = undefined;
                state.isLoading = true;
            })
            .addMatcher(request.matchFulfilled, (state) => {
                state.isLoading = false;
            })
            .addMatcher(request.matchRejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: postListReducer,
    actions: postListActions,
} = postListSlice;
