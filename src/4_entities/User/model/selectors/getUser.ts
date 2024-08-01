import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getUserData = (state: StateSchema) => state.user?.data;
export const getUserRole = (state: StateSchema) => state.user?.data?.role;
export const getUserLoading = (state: StateSchema) => state.user?.isLoading;
export const getUserError = (state: StateSchema) => state.user?.error;
