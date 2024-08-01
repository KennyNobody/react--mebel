import classNames from 'classnames';
import cls from './PictureOrder.module.scss';
import { PictureType } from '../../model/Picture';

interface PictureOrderProps {
    data: PictureType;
    className?: string;
}

export const PictureOrder = (props: PictureOrderProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <a
            href={data.link}
            className={
                classNames(cls.block, className)
            }
        >
            <img
                src={data.link}
                alt={data.title}
            />
        </a>
    );
};
