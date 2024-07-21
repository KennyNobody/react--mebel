import classNames from 'classnames';
import { ImageType } from '5_shared/types/Image';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { useImageAlt } from '5_shared/libs/hooks/useImageAlt';
import { EditorWrapper } from '5_shared/ui/EditorWrapper/EditorWrapper';
import cls from './DetailPicture.module.scss';

interface DetailPictureProps {
    image: ImageType;
    galleryKey?: string;
}

export const DetailPicture = (props: DetailPictureProps) => {
    const {
        image,
        galleryKey,
    } = props;

    const { theme } = useTheme();
    const altText = useImageAlt(image);

    const imagePath = image?.formats?.large?.url
        || image?.formats?.medium?.url
        || image?.formats?.small?.url;

    return (
        <figure className={classNames(cls.figure)}>
            {
                imagePath
                && (
                    <img
                        alt={altText}
                        loading="lazy"
                        data-caption={altText}
                        src={`${__BASE_URL__}${imagePath}`}
                        data-fancybox={galleryKey || 'post-gallery'}
                    />
                )
            }
            <figcaption className={classNames(cls.figcaption)}>
                <EditorWrapper>
                    {
                        image?.caption
                        && (
                            <p className={classNames(cls.text)}>
                                { image.caption }
                            </p>
                        )
                    }
                    {
                        image?.alternativeText
                        && (
                            <p className={classNames(cls.caption, cls[`caption--${theme}`])}>
                                { image.alternativeText }
                            </p>
                        )
                    }
                </EditorWrapper>
            </figcaption>
        </figure>
    );
};
