import React, { FC, memo } from 'react';
import './styles.scss';

const Loading: FC = () => (
    <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
    </div>
);

export default memo(Loading);
