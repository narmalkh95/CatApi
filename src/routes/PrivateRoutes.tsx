import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { IRouteElement } from './types';
import {PRIVATE_ROUTES_ENUM} from "../constants/routes";
import PrivateLayout from '../components/Layout/PrivateLayout';

const PageNotFound = lazy(() => import('../components/common/PageNotFound'));

const {TEST_COMPONENT} = PRIVATE_ROUTES_ENUM;

export const privateRoutes: IRouteElement[] = [
    {
        element: <PrivateLayout />,
        children: [
            {
                path: TEST_COMPONENT,
                element: () => <div>Some component will be here for private route</div>,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
];

const PrivateRoutes = () => {
    const routes = useRoutes(privateRoutes);
    return <>{routes}</>;
};

export default PrivateRoutes;
