import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    initDev,
    GridDev,
    ArticleDevType,
    getDevList,
    devListReducer,
    useLazyFetchDevList,
} from '4_entities/Dev';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ListDev.module.scss';

interface ListDevProps {
    className?: string;
}

const reducers: ReducersList = {
    devList: devListReducer,
};

export const ListDev = (props: ListDevProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const data: ArticleDevType[] = useSelector(getDevList.selectAll);

    const [getData] = useLazyFetchDevList({});

    useEffect(() => {
        dispatch(initDev(getData));
    }, []);

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <div
                className={
                    classNames(cls.block, className)
                }
            >
                <GridDev
                    data={data}
                />
            </div>
        </DynamicModuleLoader>
    );
};
