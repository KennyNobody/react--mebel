import classNames from 'classnames';
import cls from './Editor.module.scss';

interface EditorProps {
    data: string;
    className?: string;
}

export const Editor = (props: EditorProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div
            className={classNames(cls.editor, className)}
            dangerouslySetInnerHTML={{
                __html: data,
            }}
        />
    );
};
