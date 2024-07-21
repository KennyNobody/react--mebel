import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import { devApi } from '../../api/devApi';
import { ArticleDevType } from '../types/ArticleDev';
import { DevListSchema } from '../types/DevListSchema';

const devListAdapter = createEntityAdapter<ArticleDevType>();
devListAdapter.selectId = (item: ArticleDevType) => item.id;

export const getDevList = devListAdapter.getSelectors<StateSchema>(
    (state) => state.devList || devListAdapter.getInitialState(),
);

const initialState: DevListSchema = {
    page: 1,
    perPage: 5,
    isLoading: false,
    errors: undefined,
    category: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const devListSlice = createSlice({
    name: 'devListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLength: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        addData: (state, action: PayloadAction<ArticleDevType[]>) => {
            devListAdapter.addMany(state, action.payload);
        },
        replaceData: (state, action: PayloadAction<ArticleDevType[]>) => {
            devListAdapter.setAll(state, action.payload);
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
        const request = devApi.endpoints.fetchDevList;

        builder
            .addMatcher(request.matchPending, (state, action) => {
                const { replace } = action.meta.arg.originalArgs;
                if (replace) devListAdapter.removeAll(state);

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
    reducer: devListReducer,
    actions: devListActions,
} = devListSlice;
