import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    initPostList,
    PostArticleType,
    getPostList,
    postListReducer,
    useLazyFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ListPost.module.scss';

interface ListPostsProps {
    className?: string;
}

const reducers: ReducersList = {
    postList: postListReducer,
};

export const ListPost = (props: ListPostsProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const data: PostArticleType[] = useSelector(getPostList.selectAll);

    const [getData] = useLazyFetchPostList({});

    useEffect(() => {
        dispatch(initPostList(getData));
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
                <GridPosts
                    data={data}
                />
            </div>
        </DynamicModuleLoader>
    );
};
