import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import '../../assets/scss/privateLayout.scss';

const PrivateLayout: FC = () => {
    return (
        <div className="private-layout">
            <div className="private-layout-right-content">
                <div className="private-layout-main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PrivateLayout;
