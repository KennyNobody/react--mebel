import { memo } from 'react';
import classNames from 'classnames';
import {
    type BlocksContent,
    BlocksRenderer,
} from '@strapi/blocks-react-renderer';
import { Editor } from '5_shared/ui/Editor/Editor';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { Skeleton, SkeletonMode } from '5_shared/ui/Skeleton/Skeleton';
import cls from './DetailEditor.module.scss';
import { DetailLink } from '../DetailLink/DetailLink';
import { DetailCode } from '../DetailCode/DetailCode';
import { DetailList } from '../DetailList/DetailList';
import { DetailQuote } from '../DetailQuote/DetailQuote';
import { DetailPicture } from '../DetailPicture/DetailPicture';
import { DetailHeading } from '../DetailHeading/DetailHeading';
import { DetailParagraph } from '../DetailParagraph/DetailParagraph';

interface DetailEditorProps {
    className?: string;
    data: BlocksContent;
    isLoading?: boolean;
}

export const DetailEditor = memo((props: DetailEditorProps) => {
    const {
        data,
        isLoading,
        className,
    } = props;

    const { theme } = useTheme();

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
            <Editor className={classNames(cls.editor)}>
                {
                    isLoading
                    && (
                        <DetailParagraph>
                            <Skeleton
                                strings={40}
                                mode={SkeletonMode.LINES}
                            />
                        </DetailParagraph>
                    )
                }
                {
                    !isLoading
                    && data
                    && (
                        <BlocksRenderer
                            content={data}
                            blocks={{
                                paragraph: ({ children }) => DetailParagraph({ children }),
                                // @ts-ignore
                                image: ({ image }) => DetailPicture({ image }),
                                heading: ({ children, level }) => DetailHeading({ children, level }),
                                link: ({ children, url }) => DetailLink({ children, url }),
                                code: ({ children }) => DetailCode({ children }),
                                list: ({ children, format }) => DetailList({ children, format }),
                                quote: ({ children }) => DetailQuote({ children }),
                            }}
                        />
                    )
                }

            </Editor>
        </div>
    );
});
