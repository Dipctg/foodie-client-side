import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Packages from '../Packages/Packages';

const NavBar = () => {
    return (
        <div >
            <nav className="flex" >
                <Link as={HashLink} className="text-decoration-none p-2" to="/home#home">Home</Link>
                <Link as={HashLink} className="text-decoration-none p-2" to="/packages"><Packages></Packages></Link>
                <Link as={HashLink} className="text-decoration-none p-2" to="/events">Events</Link>

                <Link as={HashLink} className="text-decoration-none p-2" to="/aboutus">About US</Link>

            </nav>
        </div>
    );
};

export default NavBar;