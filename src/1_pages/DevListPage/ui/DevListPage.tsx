import React from 'react';
import classNames from 'classnames';
import { SectionsStack } from '2_widgets/SectionsStack';
import { MetaPage } from '3_features/MetaPage';
import { Main } from '5_shared/ui/Main/Main';
import cls from './DevListPage.module.scss';
import { useFetchPageDev } from '../api/devListPageApi';

const ListPage = () => {
    const {
        data,
        isLoading,
    } = useFetchPageDev(null);

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
