import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="nav-bar">
                <h4>Welcome to my Food Delivery Services</h4>
                <NavLink className="btn btn-outline-success" to="/home" >Home</NavLink>
                <NavLink className="btn btn-outline-success" to="/services" >Services</NavLink>
                <NavLink className="btn btn-outline-success" to="/about" >About Us</NavLink>
                <NavLink className="btn btn-outline-success" to="/coming" >Coming Soon</NavLink>
                <NavLink className="btn btn-outline-success" to="/contact" >Contact Us</NavLink>
                <NavLink className="btn btn-outline-success" to="/management" >Our Management</NavLink>
                <NavLink className="btn btn-outline-success" to="/addService" >Add Services</NavLink>
                {user.email && <span style={{ color: 'black' }}>Hello {user.displayName}</span>}
                {user.email ?
                    <button className="btn btn-outline-danger" onClick={logOut}>Log Out</button>
                    :
                    <NavLink className="btn btn-outline-danger" to="/login" >Log In</NavLink>}

            </nav>
        </div>
    );
};

export default Header;