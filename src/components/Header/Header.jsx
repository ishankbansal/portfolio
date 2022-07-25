import React from 'react';
import './Header.css';

const Header = ({ heading, quoteIntro, details }) => {
    return (
        <div className='header-container'>
            <h1>{heading}</h1>
            <h2>{quoteIntro}</h2>
            <p>{details}</p>
        </div>
    );
};

export default Header;
