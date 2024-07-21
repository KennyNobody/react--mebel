import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ListDev } from '3_features/ListDev';
import { DevFilter } from '3_features/DevFilter';
import grid from '5_shared/css/grid.module.scss';
import { Toolbar } from '5_shared/ui/Toolbar/Toolbar';
import { Container } from '5_shared/ui/Container/Container';
import { LinkTitle } from '5_shared/ui/LinkTitle/LinkTitle';
import { Stack, StackSizeType } from '5_shared/ui/Stack/Stack';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { LinkRegular } from '5_shared/ui/LinkRegular/LinkRegular';
import cls from './SectionDev.module.scss';
import { SectionType } from '../../model/Section';

interface SectionProps {
    isPreview: boolean;
    className?: string;
    data: SectionType | undefined;
}

export const SectionDev = (props: SectionProps) => {
    const {
        data,
        isPreview,
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <section className={classNames(cls.section, className)}>
            <Container>
                <Stack size={StackSizeType.MIDDLE}>
                    <div className={classNames(grid.grid, cls.grid)}>
                        <div className={classNames(grid['grid__col-2'])}>
                            {
                                data?.title
                                && (
                                    <Title mode={TitleModeType.REGULAR}>
                                        { data?.title }
                                    </Title>
                                )
                            }
                        </div>
                        <div className={classNames(grid['grid__col-2'])}>
                            <Toolbar className={classNames(cls.toolbarLinks)}>
                                {
                                    data?.linkTitle
                                    && data?.linkPath
                                    && (
                                        <LinkTitle
                                            href={data.linkPath}
                                        >
                                            { data.linkTitle }
                                        </LinkTitle>
                                    )
                                }
                            </Toolbar>
                        </div>
                        {
                            !isPreview
                            && (
                                <>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <LinkRegular
                                            to="#"
                                            text={t('resume')}
                                            className={classNames(cls.link)}
                                        />
                                    </div>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <DevFilter />
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <ListDev isPreview={isPreview} />
                    {
                        isPreview
                        && (
                            <div className={classNames(grid.grid, cls.grid)}>
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                            cls['col-clear'],
                                        )
                                    }
                                />
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                            grid['grid__col-mob-4'],
                                        )
                                    }
                                >
                                    <Toolbar
                                        className={
                                            classNames(
                                                cls['toolbar-bottom'],
                                            )
                                        }
                                    >
                                        <LinkRegular
                                            to={RouterPath.dev}
                                            text={t('allProjects')}
                                        />
                                        {/* TODO: Указать ссылку на CV */}
                                        {/* <LinkRegular */}
                                        {/*     to="#" */}
                                        {/*     text={t('resume')} */}
                                        {/* /> */}
                                    </Toolbar>
                                </div>
                            </div>
                        )
                    }
                </Stack>
            </Container>
        </section>
    );
};
