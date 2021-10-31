import React from 'react';

import Navbar from '../Nav/NavBar';

const Header = () => {
    return (
        <div>
            <h1 style={{
                padding: '5px 10px',
                backgroundColor: "lightblue",
                color: "green",
                fontfamily: "verdana",
                fontSize: "40px"
            }} >Foodie</h1>

            <div style={{
                padding: '5px 10px',
                backgroundColor: "blue",
                color: "black",


            }}>
                <Navbar></Navbar>

            </div>


        </div >
    );
};

export default Header;