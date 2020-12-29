import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <div>
                <img src='https://cdn.theunstoppablewoman.com/wp-content/uploads/2020/03/1200px-ITunes_logo.svg_.png'/>
            </div>
            <div className={c.network_name}>
               <b>
                   SayHi!
               </b>
            </div>
        </header>
    );
};

export default Header;