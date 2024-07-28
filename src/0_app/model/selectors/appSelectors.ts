import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getAppError = (state: StateSchema) => state.app?.error;
export const getAppLoading = (state: StateSchema) => state.app?.isLoading;
