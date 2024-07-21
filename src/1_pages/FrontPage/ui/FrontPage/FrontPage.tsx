import React from 'react';
import classNames from 'classnames';
import cls from './FrontPage.module.scss';

const FrontPage = () => (
    <div className={classNames(cls.main)}>
        Главная страница
    </div>
);

export default FrontPage;
