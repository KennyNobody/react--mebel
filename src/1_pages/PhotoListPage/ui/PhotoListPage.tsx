import React from 'react';
import classNames from 'classnames';
import { SectionsStack } from '2_widgets/SectionsStack';
import { MetaPage } from '3_features/MetaPage';
import { Main } from '5_shared/ui/Main/Main';
import cls from './PhotoListPage.module.scss';
import { useFetchPagePhoto } from '../api/photoListPageApi';

const ListPage = () => {
    const {
        data,
        isLoading,
    } = useFetchPagePhoto(null);

    return (
        <Main className={classNames(cls.main)}>
            <MetaPage
                isLoading={isLoading}
                data={data?.data?.seo || undefined}
            />
            <SectionsStack
                isPreview={false}
                isLoading={isLoading}
                data={data?.data?.section}
            />
        </Main>
    );
};

export default ListPage;
