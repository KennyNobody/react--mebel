import { memo } from "react";
import classNames from 'classnames';
import {
    ListTags,
    ArticleTag,
    ArticleCategory,
    ArticleCategoryMode,
    ArticleCategoryType,
} from '4_entities/Category';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import {
    Skeleton,
    SkeletonMode,
} from '5_shared/ui/Skeleton/Skeleton';
import { AppTheme } from '5_shared/config/ThemeContext';
import { Container } from '5_shared/ui/Container/Container';
import grid from '5_shared/css/grid.module.scss';
import { useScrollPercent } from '5_shared/libs/hooks/useScrollPercent';
import cls from './DetailIntro.module.scss';

interface DetailIntroProps {
    theme: AppTheme;
    className?: string;
    isLoading?: boolean;
    data?: PostArticleType | ArticleDevType;
}

export const DetailIntro = memo((props: DetailIntroProps) => {
    const {
        data,
        theme,
        isLoading,
        className,
    } = props;

    const opacity = useScrollPercent(1);
    const tagArray = data?.tags?.data;
    const category = data?.category?.data;
    const isInverted = data?.main?.previewInverted;

    return (
        <div
            className={
                classNames(
                    cls.intro,
                    cls[`intro--${theme}`],
                    className,
                )
            }
        >
            <Container>
                <div
                    hidden={opacity < 0}
                    className={
                        classNames(cls['intro-content'])
                    }
                >
                    <div className={classNames(grid.grid)}>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-lap-3'],
                                    grid['grid__col-mob-4'],
                                    cls['column-title'],
                                )
                            }
                        >
                            <h1 className={classNames(cls.title)}>
                                {
                                    !isLoading
                                    && (
                                        <>
                                            {data?.main?.previewTitle}
                                            <br />
                                            {data?.main?.previewCaption}
                                        </>
                                    )
                                }
                                {
                                    isLoading
                                    && (
                                        <Skeleton
                                            strings={2}
                                            mode={SkeletonMode.LINES}
                                        />
                                    )
                                }
                            </h1>
                        </div>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-lap-1'],
                                    grid['grid__col-mob-4'],
                                    cls['column-cat'],
                                )
                            }
                        >
                            <div className={classNames(cls['toolbar-category'])}>
                                {
                                    category
                                    && (
                                        <ArticleCategory
                                            data={category}
                                            themeProp={theme}
                                            mode={ArticleCategoryMode.STATIC}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={classNames(cls['main-content'])}>
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
                                    tagArray
                                    && tagArray?.length > 0
                                    && (
                                        <ListTags>
                                            {tagArray.map((item: ArticleCategoryType) => (
                                                <ArticleTag
                                                    data={item}
                                                    key={item.id}
                                                    themeProp={isInverted ? AppTheme.DARK : AppTheme.LIGHT}
                                                />
                                            ))}
                                        </ListTags>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
});
