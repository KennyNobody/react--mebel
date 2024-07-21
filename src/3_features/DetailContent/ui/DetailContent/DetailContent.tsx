import {
    memo,
    useState,
    useEffect,
} from 'react';
import classNames from 'classnames';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import { Container } from '5_shared/ui/Container/Container';
import { useScrollPercent } from '5_shared/libs/hooks/useScrollPercent';
import FancyboxDecorator from '5_shared/libs/decorators/FancyboxDecorator';
import cls from './DetailContent.module.scss';
import { DetailIntro } from '../DetailIntro/DetailIntro';
import { DetailEditor } from '../DetailEditor/DetailEditor';
import { DetailToolbar } from '../DetailToolbar/DetailToolbar';

interface DetailContentProps {
    className?: string;
    isLoading: boolean;
    data?: PostArticleType | ArticleDevType;
}

export const DetailContent = memo((props: DetailContentProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    const { theme } = useTheme();
    const opacity = useScrollPercent(0.75);
    const [blockTheme, setBlockTheme] = useState<AppTheme>(theme);

    useEffect(() => {
        if (data?.main?.previewInverted !== undefined) {
            setBlockTheme(
                data.main.previewInverted
                    ? AppTheme.DARK
                    : AppTheme.LIGHT,
            );
        }
    }, [data]);

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    className,
                )
            }
        >
            <picture
                style={{ opacity }}
                className={classNames(cls.picture)}
            >
                {
                    data?.main?.preview?.data?.url
                    && (
                        <img src={`${__BASE_URL__}${data?.main?.preview?.data?.url}`} alt="#" />
                    )
                }
            </picture>
            <DetailIntro
                data={data}
                theme={blockTheme}
                isLoading={isLoading}
            />
            <div
                className={classNames(cls['intro-main'])}
            >
                <Container>
                    <DetailToolbar
                        data={data}
                        theme={blockTheme}
                        isLoading={isLoading}
                    />
                </Container>
                {
                    data?.main?.content
                    && (
                        <Container className={classNames(cls['container-editor'])}>
                            <FancyboxDecorator>
                                <DetailEditor
                                    isLoading={isLoading}
                                    data={data.main.content}
                                />
                            </FancyboxDecorator>
                        </Container>
                    )
                }
            </div>
        </div>
    );
});
