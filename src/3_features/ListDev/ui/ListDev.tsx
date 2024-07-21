import {
    useRef,
    useEffect,
    MutableRefObject,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    initDev,
    GridDev,
    getDevListPage,
    getDevListCount,
    fetchNextDevList,
    getDevListLoading,
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
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './ListDev.module.scss';

interface ListDevProps {
    className?: string;
    isPreview?: boolean;
}

const reducers: ReducersList = {
    devList: devListReducer,
};

export const ListDev = (props: ListDevProps) => {
    const {
        isPreview,
        className,
    } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getDevListPage) || 1;
    const pageTotal: number = useSelector(getDevListCount) || 0;
    const data: ArticleDevType[] = useSelector(getDevList.selectAll);
    const isLoading: boolean = useSelector(getDevListLoading) || false;

    const [getData] = useLazyFetchDevList({});

    const loadNextPage = () => {
        if (!isLoading && (pageTotal > pageIndex)) {
            dispatch(fetchNextDevList({
                getData,
                replace: false,
            }));
        }
    };

    useEffect(() => {
        dispatch(initDev(getData));
    }, []);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div
                className={
                    classNames(cls.block, className)
                }
            >
                <GridDev
                    data={data}
                    showSkeleton={isLoading && !data?.length}
                    showEnd={!isPreview && !isLoading && !isPreview && pageIndex === pageTotal}
                />
                {!isPreview && <div ref={triggerRef} />}
            </div>
        </DynamicModuleLoader>
    );
};
