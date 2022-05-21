import React, { Suspense } from 'react';
// import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Loading from '../components/common/Loading';

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            {/*{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />} To handle authorized private routes in the future*/}
            {<PublicRoutes />}
        </Suspense>
    );
};

export default AppRoutes;
