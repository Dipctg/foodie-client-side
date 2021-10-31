import Button from '@material-tailwind/react/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const NavBar = () => {
    //const { user, logOut } = useFirebase();
    const { user, logOut } = useAuth();
    return (
        <div >

            <nav className="lg:flex" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} >
                <Link as={HashLink} className="text-decoration-none p-2" to="/home#home">Home</Link>
                <Link as={HashLink} className="text-decoration-none p-2" to="/packages">Packages</Link>
                <Link as={HashLink} className="text-decoration-none p-2" to="/events">Events</Link>

                <Link as={HashLink} className="text-decoration-none p-2" to="/aboutus">About US</Link>

                {user.email && <span style={{
                    color: 'red',
                    display: "flex",
                    justifyContent: "flex-end"
                }}>Welcome {user.displayName}</span>}
                {
                    user.email ?
                        <Button
                            color="lightBlue"
                            buttonType="link"
                            size="lg"
                            ripple="dark"
                            onClick={logOut}
                        >
                            log out
                        </Button>
                        :
                        <Link as={HashLink} className="text-decoration-none p-2" to="/login">Log In</Link>}

            </nav>
        </div>
    );
};

export default NavBar;