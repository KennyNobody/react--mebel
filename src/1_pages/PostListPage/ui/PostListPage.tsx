import React from 'react';
import classNames from 'classnames';
import cls from './PostListPage.module.scss';

const ListPage = () => {
    // const {
    //     data,
    //     isLoading,
    // } = useFetchPagePost(null);

    return (
        <div className={classNames(cls.main)}>
            Страница со список постов
        </div>
    );
};

export default ListPage;
