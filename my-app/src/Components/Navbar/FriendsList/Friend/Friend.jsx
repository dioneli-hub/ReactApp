import React from 'react';
import c from './Friend.module.css'
import {NavLink} from "react-router-dom";



const Friend = (props) => {
    return (
        <div className={c.friend_item}>
            <img className={c.friend_avatar} src={props.avatar}/>
            {props.name}
        </div>);
};


export default Friend;