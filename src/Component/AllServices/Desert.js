

import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
const Desert = () => {
    const [desert, SetDesert] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => {
                SetDesert(data)
            })
    }, [])
    return (
        <div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    desert.map(package1 => <Package
                        Key={package1._id} data={package1}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Desert;