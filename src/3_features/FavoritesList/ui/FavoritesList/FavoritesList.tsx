import classNames from 'classnames';
import { ButtonNav } from '5_shared/ui/ButtonNav/ButtonNav';
import { Pagination } from '5_shared/ui/Pagination/Pagination';
import { TabsWrapper } from '5_shared/ui/TabsWrapper/TabsWrapper';
import { ArticlePersonFavorite } from '4_entities/Person';
import cls from './FavoritesList.module.scss';
import { dataWorker } from '../../model/mocks/dataWorker';
import {dataProjects} from "3_features/FavoritesList/model/mocks/dataProjects";
import {ArticleProjectFavorite} from "4_entities/Project";

interface FavoritesListProps {
    className?: string
}

export const FavoritesList = (props: FavoritesListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <TabsWrapper className={classNames(cls.nav)}>
                <ButtonNav
                    isActive
                    caption="Мебельщики"
                    clickEvent={() => console.log('Пык')}
                />
                <ButtonNav
                    caption="Проекты"
                    clickEvent={() => console.log('Пык')}
                />
            </TabsWrapper>
            <div className={classNames(cls.list)}>
                {
                    dataWorker.list.map((item) => <ArticlePersonFavorite key={item.id} data={item} />)
                }
                {
                    dataProjects.list.map((item) => <ArticleProjectFavorite key={item.id} data={item} />)
                }
            </div>
            <Pagination
                lastPage={14}
                currentPage={2}
                className={classNames(cls.pagination)}
            />
        </div>
    );
};
