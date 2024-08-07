import { RouteProps } from 'react-router-dom';
import { FrontPage } from '1_pages/FrontPage';
import { NotFoundPage } from '1_pages/NotFoundPage';
import { AddingProjectPage } from '1_pages/AddingProjectPage';
import { OrdersListPage } from '1_pages/OrdersListPage';
import { PortfolioPage } from '1_pages/PortfolioPage';
import { OrdersCatalogPage } from '1_pages/OrdersCatalogPage';
import { OrderDetailPage } from '1_pages/OrderDetailPage';
import { SettingsPage } from '1_pages/SettingsPage';
import { ReviewsListPage } from '1_pages/ReviewsListPage';
import { AddingReviewPage } from '1_pages/AddingReviewPage';
import { FavoritesPage } from '1_pages/FavoritesPage';
import { AddingOrderPage } from '1_pages/AddingOrderPage';

enum AppRouter {
    MAIN = 'main',
    ADDING_PROJECT = 'adding_project',
    ADDING_REVIEW = 'adding_review',
    ADDING_ORDER = 'adding_order',
    FAVORITES_LIST = 'favorites_list',
    ORDERS_LIST = 'orders_list',
    PORTFOLIO = 'portfolio',
    ORDERS_CATALOG = 'orders_catalog',
    ORDER_DETAIL = 'order_detail',
    SETTINGS = 'settings',
    REVIEWS_LIST = 'reviews_list',
    NOT_FOUND = 'not_found',
}

const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ADDING_PROJECT]: '/adding_project/',
    [AppRouter.ADDING_REVIEW]: '/adding_review',
    [AppRouter.ADDING_ORDER]: '/adding_order',
    [AppRouter.FAVORITES_LIST]: '/favorites-list/',
    [AppRouter.ORDERS_LIST]: '/orders-list/',
    [AppRouter.PORTFOLIO]: '/portfolio/',
    [AppRouter.ORDERS_CATALOG]: '/orders-catalog/',
    [AppRouter.ORDER_DETAIL]: '/orders-list/',
    [AppRouter.SETTINGS]: '/settings/',
    [AppRouter.REVIEWS_LIST]: '/reviews-list/',
    [AppRouter.NOT_FOUND]: '*',
};

const routeConfig: RouteProps[] = [
    {
        path: RouterPath.main,
        element: <FrontPage />,
    },
    {
        path: RouterPath.adding_project,
        element: <AddingProjectPage />,
    },
    {
        path: RouterPath.adding_review,
        element: <AddingReviewPage />,
    },
    {
        path: RouterPath.adding_order,
        element: <AddingOrderPage />,
    },
    {
        path: RouterPath.favorites_list,
        element: <FavoritesPage />,
    },
    {
        path: RouterPath.orders_list,
        element: <OrdersListPage />,
    },
    {
        path: RouterPath.portfolio,
        element: <PortfolioPage />,
    },
    {
        path: RouterPath.orders_catalog,
        element: <OrdersCatalogPage />,
    },
    {
        path: `${RouterPath.order_detail}:slug`,
        element: <OrderDetailPage />,
    },
    {
        path: RouterPath.settings,
        element: <SettingsPage />,
    },
    {
        path: RouterPath.reviews_list,
        element: <ReviewsListPage />,
    },
    {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
];

export {
    AppRouter,
    RouterPath,
    routeConfig,
};
