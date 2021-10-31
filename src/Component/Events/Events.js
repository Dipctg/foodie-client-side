import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Events = () => {
    return (
        <div>
            <h1>Friday spacial Events </h1>
            <div className='bg-purple-300 p-4'>
                <Link as={HashLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 " to="/packages">Packages</Link>
                <br />
                <Link as={HashLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" to="/breakfast">Breakfast</Link>
                <br />
                <Link as={HashLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" to="/lunch">Lunch</Link>
                <br />
                <Link as={HashLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" to="/dinner">Dinner</Link>
            </div>
        </div>
    );
};

export default Events;