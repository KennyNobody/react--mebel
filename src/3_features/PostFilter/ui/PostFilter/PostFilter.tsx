import { useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    postListReducer,
    postListActions,
    useLazyFetchPostList,
    fetchNextPostList,
    getPostListCategory,
} from '4_entities/Post';
import {
    ListCategory,
    ArticleCategoryType,
    useFetchCategoryList, CategoryMode,
} from '4_entities/Category';
import { useDebounce } from '5_shared/libs/hooks/useDebounce';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './PostFilter.module.scss';

interface PostFilterProps {
    className?: string;
}

const reducers: ReducersList = {
    postList: postListReducer,
};

export const PostFilter = (props: PostFilterProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const activeCategory: number | undefined = useSelector(getPostListCategory);

    const {
        data,
        isLoading,
    } = useFetchCategoryList(CategoryMode.POST);

    const [getData] = useLazyFetchPostList({});

    const fetchData = () => {
        dispatch(fetchNextPostList({
            getData,
            replace: true,
        }));
    };

    // Todo: Возможно, стоит совсем убрать, пока пусть будет 0
    const debouncedFetchData = useDebounce(fetchData, 0);

    const changeCategory = useCallback((item: ArticleCategoryType | undefined): void => {
        dispatch(postListActions.toggleCategory(item?.id || undefined));
        debouncedFetchData();
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <div className={classNames(cls.block, className)}>
                <ListCategory
                    data={data?.data}
                    selectEvent={changeCategory}
                    selectedItem={activeCategory}
                    showSkeleton={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};
