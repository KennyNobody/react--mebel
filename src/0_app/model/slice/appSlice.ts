import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { AppSchema } from '../types/AppSchema';

const initialState: AppSchema = {
    isLoading: false,
    error: undefined,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // setFixed: (state, action: PayloadAction<boolean>) => {
        //     state.fixed = action.payload;
        // },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchAppData.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(fetchAppData.fulfilled, (
        //         state,
        //         action: PayloadAction<AppDataType>,
        //     ) => {
        //         state.isLoading = false;
        //         state.data = action.payload;
        //     })
        //     .addCase(fetchAppData.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
