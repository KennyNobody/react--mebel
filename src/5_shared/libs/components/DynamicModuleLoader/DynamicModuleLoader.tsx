import {
    FC,
    ReactNode,
    useEffect,
} from 'react';
import {
    useStore,
    useDispatch,
} from 'react-redux';
import {
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
} from '0_app/prodivers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: ReactNode,
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({
                    type: `@INIT: ${name} reducer`,
                });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({
                        type: `@REMOVE: ${name} reducer`,
                    });
                });
            }
        };
    }, []);

    return children;
};
