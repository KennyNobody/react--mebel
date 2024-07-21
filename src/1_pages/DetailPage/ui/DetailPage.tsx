import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import cls from './DetailPage.module.scss';

function DetailPage() {
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className={classNames(cls.main)}>
            Одиночная страница
        </div>
    );
}

export default DetailPage;
