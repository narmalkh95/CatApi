import { ReactElement } from 'react';

export type IRouteElement = {
    routes?: IRouteElement[];
    element: ReactElement;
    exact?: boolean;
    path?: string;
    children?: any;
};
