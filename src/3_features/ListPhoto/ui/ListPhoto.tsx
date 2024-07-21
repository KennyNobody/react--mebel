import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPhoto,
    initPhotoList,
    ArticlePhotoType,
    getPhotoList,
    photoListReducer,
    useLazyFetchPhotoList,
} from '4_entities/Photo';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ListPhoto.module.scss';

interface ListPostsProps {
    className?: string;
}

const reducers: ReducersList = {
    photoList: photoListReducer,
};

export const ListPhoto = (props: ListPostsProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const data: ArticlePhotoType[] = useSelector(getPhotoList.selectAll);

    const [getData] = useLazyFetchPhotoList({});

    useEffect(() => {
        dispatch(initPhotoList(getData));
    }, []);

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
                />
            </div>
        </DynamicModuleLoader>
    );
};
