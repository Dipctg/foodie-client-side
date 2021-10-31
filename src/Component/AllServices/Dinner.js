

import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
const Dinner = () => {
    const [dinner, SetDinner] = useState([]);
    useEffect(() => {
        fetch('https://shocking-castle-07906.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                SetDinner(data)
            })
    }, [])
    return (
        <div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    dinner.map(package1 => <Package
                        Key={package1._id} data={package1}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Dinner;