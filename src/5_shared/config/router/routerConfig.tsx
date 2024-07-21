import { RouteProps } from 'react-router-dom';
import { FrontPage } from '1_pages/FrontPage';
import { DetailPage } from '1_pages/DetailPage';
import { DevListPage } from '1_pages/DevListPage';
import { PostListPage } from '1_pages/PostListPage';
import { NotFoundPage } from '1_pages/NotFoundPage';
import { PhotoListPage } from '1_pages/PhotoListPage';
import { ContentKeyType } from '5_shared/types/CommonTypes';

export type AppRouteProps = RouteProps & {
    layoutMode: PageLayoutMode;
};

export enum PageLayoutMode {
    FRONT = 'front',
    LIST = 'list',
    STATIC = 'static',
    DETAIL = 'detail',
}

export enum AppRouter {
    MAIN = 'main',
    DEV = 'dev',
    DEV_DETAIL = 'dev_detail',
    POSTS = 'posts',
    POST_DETAIL = 'post_detail',
    PHOTO = 'photo',
    PHOTO_DETAIL = 'photo_detail',
    NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.POSTS]: '/posts/',
    [AppRouter.POST_DETAIL]: '/posts/',
    [AppRouter.DEV]: '/dev/',
    [AppRouter.DEV_DETAIL]: '/dev/',
    [AppRouter.PHOTO]: '/photo/',
    [AppRouter.PHOTO_DETAIL]: '/photo/',
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: AppRouteProps[] = [
    {
        path: RouterPath.main,
        element: <FrontPage />,
        layoutMode: PageLayoutMode.FRONT,
    },
    {
        path: RouterPath.posts,
        element: <PostListPage />,
        layoutMode: PageLayoutMode.LIST,
    },
    {
        path: `${RouterPath.post_detail}:slug`,
        element: <DetailPage />,
        layoutMode: PageLayoutMode.DETAIL,
    },
    {
        path: RouterPath.dev,
        element: <DevListPage />,
        layoutMode: PageLayoutMode.LIST,
    },
    {
        path: `${RouterPath.dev_detail}:slug`,
        element: <DetailPage />,
        layoutMode: PageLayoutMode.DETAIL,
    },
    {
        path: RouterPath.photo,
        element: <PhotoListPage />,
        layoutMode: PageLayoutMode.LIST,
    },
    {
        path: `${RouterPath.photo_detail}:slug`,
        element: <DetailPage />,
        layoutMode: PageLayoutMode.DETAIL,
    },
    {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
        layoutMode: PageLayoutMode.STATIC,
    },
];
