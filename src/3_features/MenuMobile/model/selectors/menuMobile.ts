import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getMenuMobileIsOpened = (state: StateSchema) => state?.menuMobile?.menuOpened;
