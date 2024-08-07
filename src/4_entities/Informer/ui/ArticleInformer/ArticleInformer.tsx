import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './ArticleInformer.module.scss';
import { InformerType } from '../../model/types/Informer';

interface ArticleInformerProps {
    className?: string;
    data: InformerType;
}

export const ArticleInformer = (props: ArticleInformerProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <h3 className={classNames(cls.title)}>
                { data.title }
            </h3>
            <Editor
                data={data.content}
                className={classNames(cls.editor)}
            />
        </div>
    );
};
