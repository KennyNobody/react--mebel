export type {
    UserType,
    UserRole,
} from './model/types/User';

export type {
    UserSchema,
} from './model/types/UserSchema';

export {
    dataUser,
} from './model/mocks/User';

export {
    userSlice,
    userReducer,
    userActions,
} from './model/slices/userSlice';

export {
    getUserData,
    getUserRole,
    getUserError,
    getUserLoading,
} from './model/selectors/getUser';

export {
    HeadAside,
} from './ui/HeadAside/HeadAside';
