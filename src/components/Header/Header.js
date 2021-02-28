import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt=""/>
           <nav>
               <a href="/Shop">Shop</a>
               <a href="/Order">Order Items</a>
               <a href="/manage">Manage Order Items</a>
               </nav>
        </div>
    );
};

export default Header;