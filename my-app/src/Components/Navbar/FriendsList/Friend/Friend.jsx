import React from 'react';
import c from './Friend.module.css'
import {NavLink} from "react-router-dom";



const Friend = (props) => {
    return (
        <div className={c.friend_item}>
            <img className={c.friend_avatar} src={props.avatar}/>
            <h5>{props.name}</h5>
        </div>);
};


export default Friend;