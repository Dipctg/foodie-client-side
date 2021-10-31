import React from 'react';
import Events from '../Events/Events';
import Packages from '../Packages/Packages';
import Card from '../Card/Card';

const Home = () => {
    return (
        <div>
            <Card></Card>
            <Packages></Packages>
            <Events></Events>

        </div>
    );
};

export default Home;