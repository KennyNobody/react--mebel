import { useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    fetchNextDevList,
    getDevListCategory,
    devListReducer,
    devListActions,
    useLazyFetchDevList,
} from '4_entities/Dev';
import {
    ListCategory,
    CategoryMode,
    ArticleCategoryType,
    useFetchCategoryList,
} from '4_entities/Category';
import { useDebounce } from '5_shared/libs/hooks/useDebounce';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './DevFilter.module.scss';

interface DevFilterProps {
    className?: string;
}

const reducers: ReducersList = {
    devList: devListReducer,
};

export const DevFilter = (props: DevFilterProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const activeCategory: number | undefined = useSelector(getDevListCategory);

    const {
        data,
        isLoading,
    } = useFetchCategoryList(CategoryMode.DEV);

    const [getData] = useLazyFetchDevList({});

    const fetchData = () => {
        dispatch(fetchNextDevList({
            getData,
            replace: true,
        }));
    };

    // Todo: Возможно, стоит совсем убрать, пока пусть будет 0
    const debouncedFetchData = useDebounce(fetchData, 0);

    const changeCategory = useCallback((item: ArticleCategoryType | undefined): void => {
        dispatch(devListActions.toggleCategory(item?.id || undefined));
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
