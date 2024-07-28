import {
    configureStore,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { $api } from '5_shared/api/api';
import { rtkApi } from '5_shared/api/rtkApi';
import { appReducer } from '0_app/model/slice/appSlice';
import { StateSchema } from './StateSchema';
import { reducersList } from './reducersList';

export function createReduxStore(
    initialState?: StateSchema,
) {
    const reducers: ReducersMapObject<StateSchema> = {
        app: appReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        ...reducersList,
    };

    return configureStore({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        })
            .concat(rtkApi.middleware),
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
