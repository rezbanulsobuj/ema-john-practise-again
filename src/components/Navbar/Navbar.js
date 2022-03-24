import React from 'react';
import './Navbar.css'
import logo from '../../images/Logo.svg'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img src={logo} alt="" />
            <div className='navbar-info'>
                <a href="/home">Home</a>
                <a href="/product">Product</a>
                <a href="/About">About</a>
                <a href="/Object">sh0w</a>
            </div>
        </div>
    );
};

export default Navbar;