import { userReducer } from '4_entities/User';
import { ReducersMapObject } from '@reduxjs/toolkit';

const reducersList: ReducersMapObject = {
    user: userReducer,
};

export {
    reducersList,
};
