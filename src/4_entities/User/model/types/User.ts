type UserRole = 'client' | 'worker';

type UserSex = 'мужской' | 'женский';

interface SocialsType {
    vk?: string;
    tg?: string;
    inst?: string;
}

interface UserType {
    role: UserRole;
    sex?: UserSex;
    name?: string;
    picture?: string;
    surname?: string;
    aboutText?: string;
    discountCode?: number;
    socials?: SocialsType;
}

export type {
    UserType,
    UserRole,
};
