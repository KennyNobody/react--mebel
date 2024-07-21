import {
    forwardRef,
    ForwardedRef,
} from 'react';
import classNames from 'classnames';
import { Share } from '3_features/Share';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import { AppTheme } from '5_shared/config/ThemeContext';
import { DateInfo } from '5_shared/ui/DateInfo/DateInfo';
import Icon from '5_shared/assets/icons/arrow-scroll.svg';
import cls from './DetailToolbar.module.scss';

interface DetailToolbarProps {
    theme: AppTheme;
    className?: string;
    isLoading?: boolean;
    data: PostArticleType | ArticleDevType | undefined;
}

export const DetailToolbar = forwardRef((props: DetailToolbarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        data,
        theme,
        isLoading,
        className,
    } = props;

    return (
        <div
            ref={ref}
            id="scroll-anchor"
            className={
                classNames(
                    cls.footer,
                    cls[`footer--${theme}`],
                    className,
                )
            }
        >
            <div className={classNames(cls['footer-grid'])}>
                <div className={classNames(cls['column-date'])}>
                    {
                        !isLoading
                        && data?.publishedAt
                        && (
                            <DateInfo
                                date={data?.publishedAt}
                                className={classNames(cls.time)}
                            />
                        )
                    }
                </div>
                <div className={classNames(cls['column-button'])}>
                    <a
                        href="#scroll-anchor"
                        className={classNames(cls.button)}
                    >
                        <Icon
                            className={
                                classNames(
                                    cls.icon,
                                    cls[`icon--${theme}`],
                                )
                            }
                        />
                    </a>
                </div>
                <div className={classNames(cls['column-share'])}>
                    {
                        !isLoading
                        && data
                        && (
                            <Share
                                data={data}
                                themeProp={theme}
                                className={classNames(cls.share)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
});
