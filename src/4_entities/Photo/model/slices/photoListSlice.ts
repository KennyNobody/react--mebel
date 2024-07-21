import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import { photoApi } from '../../api/photoApi';
import { ArticlePhotoType } from '../types/ArticlePhoto';
import { PhotoListSchema } from '../types/PhotoListSchema';

const photoListAdapter = createEntityAdapter<ArticlePhotoType>();
photoListAdapter.selectId = (item: ArticlePhotoType) => item.id;

export const getPhotoList = photoListAdapter.getSelectors<StateSchema>(
    (state) => state.photoList || photoListAdapter.getInitialState(),
);

const initialState: PhotoListSchema = {
    page: 1,
    perPage: 8,
    isLoading: false,
    errors: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const photoListSlice = createSlice({
    name: 'photoListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLength: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        addData: (state, action: PayloadAction<ArticlePhotoType[]>) => {
            photoListAdapter.addMany(state, action.payload);
        },
        replaceData: (state, action: PayloadAction<ArticlePhotoType[]>) => {
            photoListAdapter.setAll(state, action.payload);
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            state.page = pagination.page;
            state.count = pagination.pageCount;
        },
    },
    extraReducers: (builder) => {
        const request = photoApi.endpoints.fetchPhotoList;

        builder
            .addMatcher(request.matchPending, (state, action) => {
                const { replace } = action.meta.arg.originalArgs;
                if (replace) photoListAdapter.removeAll(state);

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
    reducer: photoListReducer,
    actions: photoListActions,
} = photoListSlice;
