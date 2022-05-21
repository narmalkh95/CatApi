import { Outlet } from 'react-router-dom';

import '../../assets/scss/publicLayout.scss';

const PublicLayout = () => (
    <>
        <div className="public-layout">
            <div className="container">
                <Outlet />
            </div>
        </div>
    </>
);

export default PublicLayout;
