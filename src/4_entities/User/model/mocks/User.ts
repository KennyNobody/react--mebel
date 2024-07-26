import { UserType } from '../types/User';

const dataUser: UserType = {
    role: 'client',
    sex: 'мужской',
    name: 'Станислав',
    surname: 'Петров',
    tel: '9991091234',
    email: 'demo@mail.com',
    picture: 'https://placehold.co/1920x1080',
    aboutText: 'Длинный рассказ о себе',
    discountCode: 123124124,
    socials: {
        vk: 'vk.com',
        tg: 'tg.com',
        inst: 'instagram.com',
    },
};

export {
    dataUser,
};
