import { AxiosInstance } from 'axios';
import { rtkApi } from '5_shared/api/rtkApi';
import { AppSchema } from '0_app/model/types/AppSchema';
import { UserSchema } from '4_entities/User';

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    app: AppSchema;
    user?: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
