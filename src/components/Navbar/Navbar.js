import React from 'react';
import './Navbar.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img src={logo} alt="" />
            <div className='navbar-info'>
                <Link to="/home">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                {/* <Link to="/setup">SignUp</Link> */}

            </div>
        </div>
    );
};

export default Navbar;