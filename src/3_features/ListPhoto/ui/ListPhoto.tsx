import {
    useRef,
    useEffect,
    MutableRefObject,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPhoto,
    initPhotoList,
    getPhotoListPage,
    getPhotoListCount,
    fetchNextPhotoList,
    getPhotoListLoading,
    ArticlePhotoType,
    getPhotoList,
    photoListReducer,
    useLazyFetchPhotoList,
} from '4_entities/Photo';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './ListPhoto.module.scss';

interface ListPostsProps {
    className?: string;
    isPreview?: boolean;
}

const reducers: ReducersList = {
    photoList: photoListReducer,
};

export const ListPhoto = (props: ListPostsProps) => {
    const {
        isPreview,
        className,
    } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getPhotoListPage) || 1;
    const pageTotal: number = useSelector(getPhotoListCount) || 0;
    const data: ArticlePhotoType[] = useSelector(getPhotoList.selectAll);
    const isLoading: boolean = useSelector(getPhotoListLoading) || false;

    const [getData] = useLazyFetchPhotoList({});

    const loadNextPage = () => {
        if (!isLoading && (pageTotal > pageIndex)) {
            dispatch(fetchNextPhotoList({
                getData,
                replace: false,
            }));
        }
    };

    useEffect(() => {
        dispatch(initPhotoList(getData));
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
                <GridPhoto
                    data={data}
                    showSkeleton={isLoading && !data?.length}
                    showEnd={!isPreview && !isLoading && pageIndex === pageTotal}
                />
                {!isPreview && <div ref={triggerRef} />}
            </div>
        </DynamicModuleLoader>
    );
};
