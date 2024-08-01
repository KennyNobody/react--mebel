import classNames from 'classnames';
import cls from './TextBlock.module.scss';

interface TextBlockProps {
    className?: string;
    title: string;
    content: string;
}

export const TextBlock = (props: TextBlockProps) => {
    const {
        title,
        content,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <p className={classNames(cls.title)}>
                { title }
            </p>
            <div
                className={classNames(cls.content)}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};
