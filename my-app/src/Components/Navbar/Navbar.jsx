import React from 'react';
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Message from "../Dialogs/Message/Message";
import FriendsList from "./FriendsList/FriendsList";



const Navbar = (props) => {

    return (
            <nav className={c.nav}>
                <div className={c.item}>
                    <NavLink to='/profile' activeClassName={c.active}>Profile</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/news' activeClassName={c.active}>News</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/music' activeClassName={c.active}>Music</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/settings' activeClassName={c.active}>Settings</NavLink>
                </div>

                <div className={c.friends_list_container}>
                    <FriendsList state={props.state}/>
                </div>
            </nav>
    );
}

export default Navbar;