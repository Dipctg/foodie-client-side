import React from 'react';
import usePackages from './usePackages';

const OrderReview = () => {
    const [packages, setPackages] = usePackages();
    return (
        <div>
            <h1>{packages.length}</h1>
        </div>
    );
};

export default OrderReview;