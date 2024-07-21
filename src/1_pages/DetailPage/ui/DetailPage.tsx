import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { MetaPage } from '3_features/MetaPage';
import { DetailContent } from '3_features/DetailContent';
import { useFetchDevById } from '4_entities/Dev';
import { useFetchPostById } from '4_entities/Post';
import { useFetchPhotoById } from '4_entities/Photo';
import { Main } from '5_shared/ui/Main/Main';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './DetailPage.module.scss';

const fetchMethods: Record<ContentKeyType, any> = {
    [ContentKeyType.POST]: useFetchPostById,
    [ContentKeyType.DEV]: useFetchDevById,
    [ContentKeyType.PHOTO]: useFetchPhotoById,
};

interface DetailPageProps {
    mode: ContentKeyType;
}

function DetailPage({ mode }: DetailPageProps) {
    const { slug } = useParams<{ slug: string }>();
    const { data, isLoading } = fetchMethods[mode](slug || 'none');

    return (
        <Main className={classNames(cls.main)}>
            <MetaPage
                isLoading={isLoading}
                data={data?.seo || undefined}
            />
            <DetailContent
                data={data}
                isLoading={isLoading}
            />
        </Main>
    );
}

export default DetailPage;
