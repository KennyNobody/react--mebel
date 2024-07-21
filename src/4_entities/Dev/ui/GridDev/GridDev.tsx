import classNames from 'classnames';
import cls from './GridDev.module.scss';
import { ArticleDev } from '../ArticleDev/ArticleDev';
import { ArticleDevType } from '../../model/types/ArticleDev';

interface ListDevProps {
    className?: string;
    data: ArticleDevType[] | null;
}

export const GridDev = (props: ListDevProps) => {
    const {
        data,
        className,
    } = props;

    const content = (
        data
        && data?.length > 0
        && data?.map((item) => (
            <li key={item.id}>
                <ArticleDev
                    data={item}
                />
            </li>
        ))
    );

    return (
        <div className={classNames(cls.block)}>
            <ul className={classNames(cls.list, className)}>
                { content }
            </ul>
        </div>
    );
};
