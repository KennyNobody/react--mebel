import {
    createSlice,
} from '@reduxjs/toolkit';
import { MenuMobileSchema } from '../types/MenuMobileSchema';

const initialState: MenuMobileSchema = {
    menuOpened: false,
};

const menuMobile = createSlice({
    name: 'menuMobileSlice',
    initialState,
    reducers: {
        setMenuMobileState: (state) => {
            state.menuOpened = !state.menuOpened;
        },
    },
});

export const {
    reducer: menuMobileReducer,
    actions: menuMobileActions,
} = menuMobile;
