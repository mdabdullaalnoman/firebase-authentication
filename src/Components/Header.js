import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/CssFiles/Header.css';
import useFirebase from '../Hook/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div>
            <div className="header">
                <Link to="/home">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/Login">Login</Link>
                {
                    user.displayName &&
                    <Link to="/login">{user.displayName}</Link>
                }
                {
                    user.displayName &&
                    <button onClick={handleSignOut}>Logout</button>
                }
            </div>
        </div>
    );
};

export default Header;