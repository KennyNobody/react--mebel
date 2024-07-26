import React from 'react';
import classNames from 'classnames';
import { EditProfile } from '3_features/EditProfile';
import cls from './FrontPage.module.scss';

const FrontPage = () => (
    <div className={classNames(cls.main)}>
        <EditProfile />
    </div>
);

export default FrontPage;
