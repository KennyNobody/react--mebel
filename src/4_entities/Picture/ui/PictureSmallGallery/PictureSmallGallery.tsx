import classNames from 'classnames';
import cls from './PictureSmallGallery.module.scss';
import { PictureType } from '../../model/Picture';

interface PictureSmallGalleryProps {
    className?: string;
    data: PictureType[];
}

export const PictureSmallGallery = (props: PictureSmallGalleryProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            {
                data.map((item) => (
                    <a
                        href="/#/"
                        className={classNames(cls.item)}
                    >
                        <img src={item.link} alt={item.title} />
                    </a>
                ))
            }
        </div>
    );
};
