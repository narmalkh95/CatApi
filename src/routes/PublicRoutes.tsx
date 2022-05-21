import React, { FC, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { PUBLIC_ROUTES_ENUM } from '../constants/routes';
import { IRouteElement } from './types';
import PublicLayout from '../components/Layout/PublicLayout';

const HomePageComponent = lazy(() => import('../components/HomePage'));
const PageNotFound = lazy(() => import('../components/common/PageNotFound'));

const { HOME } = PUBLIC_ROUTES_ENUM;

const publicRoutes: IRouteElement[] = [
    {
        element: <PublicLayout />,
        children: [
            {
                path: HOME,
                element: <HomePageComponent />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
];

const PublicRoutes: FC = () => {
    const routes = useRoutes(publicRoutes);
    return <>{routes}</>;
};

export default PublicRoutes;
