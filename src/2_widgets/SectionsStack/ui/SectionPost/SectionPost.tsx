import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ListPost } from '3_features/ListPost';
import { PostFilter } from '3_features/PostFilter';
import grid from '5_shared/css/grid.module.scss';
import { Toolbar } from '5_shared/ui/Toolbar/Toolbar';
import { Container } from '5_shared/ui/Container/Container';
import { Stack, StackSizeType } from '5_shared/ui/Stack/Stack';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { LinkRegular } from '5_shared/ui/LinkRegular/LinkRegular';
import cls from './SectionPost.module.scss';
import { SectionType } from '../../model/Section';

interface SectionProps {
    isPreview: boolean;
    className?: string;
    data: SectionType | null;
}

export const SectionPost = (props: SectionProps) => {
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
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-mob-4'],
                                )
                            }
                        >
                            {
                                data?.title
                                && (
                                    <Title mode={TitleModeType.REGULAR}>
                                        { data?.title }
                                    </Title>
                                )
                            }
                        </div>
                        {
                            !isPreview
                            && (
                                <>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                cls['cell-years'],
                                            )
                                        }
                                    >
                                        {
                                            data?.years
                                            && (
                                                <Title mode={TitleModeType.REGULAR}>
                                                    { data.years }
                                                </Title>
                                            )
                                        }
                                    </div>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                cls['cell-separator'],
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
                                        <PostFilter
                                            className={classNames(cls.category)}
                                        />
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <ListPost isPreview={isPreview} />
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
                                            to={RouterPath.posts}
                                            text={t('Все заметки')}
                                        />
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
