import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <img src='https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_1280.png'/>
        </header>
    );
};

export default Header;