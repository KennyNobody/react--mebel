import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MetaPageType } from '5_shared/types/CommonTypes';

interface MetaPageProps {
    data?: MetaPageType;
    isLoading?: boolean;
}

export const MetaPage = memo((props: MetaPageProps) => {
    const {
        data,
        isLoading,
    } = props;

    const { t } = useTranslation();

    const contentLoading = <title>{ t('loading') }</title>;

    const content = (
        <>
            {
                data?.metaTitle
                && <title>{ data?.metaTitle }</title>
            }
            {
                data?.metaDescription
                && <meta name="description" content={data?.metaDescription} />
            }
            {
                data?.keywords
                && <meta name="keywords" content={data?.keywords} />
            }
            {
                data?.metaRobots
                && <meta name="robots" content={data?.metaRobots} />
            }
            {
                data?.structuredData
                && (
                    <script type="application/ld+json">
                        { JSON.stringify(data?.structuredData) }
                    </script>
                )
            }
        </>
    );

    return (
        <Helmet>
            { isLoading ? contentLoading : content }
            { !isLoading && !data && <title>...</title> }
        </Helmet>
    );
});
