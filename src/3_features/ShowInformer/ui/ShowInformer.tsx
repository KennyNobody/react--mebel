import classNames from 'classnames';
import {
    InformerArea,
    ArticleInformer,
} from '4_entities/Informer';
import {
    dataInformerClient,
    dataInformerWorker,
} from '../model/mocks/dataInformer';
import cls from './ShowInformer.module.scss';

interface ShowInformerProps {
    className?: string;
    mode: InformerArea;
}

export const ShowInformer = (props: ShowInformerProps) => {
    const {
        mode,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <ArticleInformer data={mode === 'worker-orders' ? dataInformerWorker : dataInformerClient} />
        </div>
    );
};
