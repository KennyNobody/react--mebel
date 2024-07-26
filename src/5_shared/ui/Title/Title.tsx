import classNames from 'classnames';
import cls from './Title.module.scss';

interface TitleProps {
    text: string;
    className?: string;
}

export const Title = (props: TitleProps) => {
    const {
        text,
        className,
    } = props;

    return (
        <h2 className={classNames(cls.block, className)}>
            { text }
        </h2>
    );
};
