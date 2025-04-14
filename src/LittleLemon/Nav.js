//import React from 'react';
import logo from './LL_logo.png';
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
        <html className="LL_Nav">
            <div className="container">
                <img src={logo} className="App-logo" alt="logo"></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><a href="#">Order online</a></li>
                </ul>
            </div>
        </html>
    );
}

export default Nav;