import {
    Action,
    Reducer,
    EnhancedStore,
    CombinedState,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { MenuMobileSchema } from '3_features/MenuMobile';
import { DevListSchema } from '4_entities/Dev';
import { PostListSchema } from '4_entities/Post';
import { PhotoListSchema } from '4_entities/Photo';
import { rtkApi } from '5_shared/api/rtkApi';

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    postList?: PostListSchema;
    photoList?: PhotoListSchema;
    devList?: DevListSchema;
    menuMobile?: MenuMobileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
