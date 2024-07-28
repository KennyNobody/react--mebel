import { UserType } from './User';

interface UserSchema {
    data: UserType;
    isLoading: boolean;
    error?: string;
}

export {
    type UserSchema,
};
