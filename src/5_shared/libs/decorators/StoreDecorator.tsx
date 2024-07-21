import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '0_app/prodivers/StoreProvider';

interface ThemeDecoratorProps {
    children: ReactNode,
    state: DeepPartial<StateSchema>;
}

export const StoreDecorator = (props: ThemeDecoratorProps) => {
    const { children, state } = props;

    return (
        <StoreProvider initialState={state}>
            {children}
        </StoreProvider>
    );
};
