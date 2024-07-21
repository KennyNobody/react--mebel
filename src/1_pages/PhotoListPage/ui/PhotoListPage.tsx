import React from 'react';
import classNames from 'classnames';
import cls from './PhotoListPage.module.scss';

const ListPage = () => {
    // const {
    //     data,
    //     isLoading,
    // } = useFetchPagePhoto(null);

    return (
        <div className={classNames(cls.main)}>
            Страница списка фото
        </div>
    );
};

export default ListPage;
