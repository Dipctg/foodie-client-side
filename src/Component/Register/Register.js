import Button from '@material-tailwind/react/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Your password" />
                    <br />
                    <input type="password" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Log In</Link>
                </p>
                <div>------or------</div>
                <Button
                    color="lightBlue"
                    buttonType="link"
                    size="lg"
                    ripple="dark"
                >
                    Google Sign In
                </Button>
            </div>
        </div>
    );
};

export default Register;