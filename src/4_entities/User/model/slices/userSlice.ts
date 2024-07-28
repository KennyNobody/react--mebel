import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { dataUser } from '../mocks/User';
import { UserRole } from '../types/User';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
    data: dataUser,
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'albumList',
    initialState,
    reducers: {
        initState: () => {},
        // setPage: (state, action: PayloadAction<number>) => {
        //     state.page = action.payload;
        // },
        setRole: (state, action: PayloadAction<UserRole>) => {
            state.data.role = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchAlbumList.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(fetchAlbumList.fulfilled, (
        //         state,
        //         action: PayloadAction<ArticleThumbType[]>,
        //     ) => {
        //         state.isLoading = false;
        //         state.hasMore = action.payload.length >= state.limit;
        //
        //         albumListAdapter.addMany(state, action.payload);
        //     })
        //     .addCase(fetchAlbumList.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
