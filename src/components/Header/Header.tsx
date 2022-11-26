import React from 'react';
import './Header.css'
import { withRouter, Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
        </div>
    );
};

export default withRouter(Header);