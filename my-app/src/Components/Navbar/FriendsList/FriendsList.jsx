import React from 'react';
import c from './FriendsList.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const FriendsList = (props) => {

    let friendsElements = props.state.friendsData.map(friend =>
        <Friend name={friend.name} avatar={friend.avatar}/>
    );

    return (
        <div className={c.friends_container}>
            {friendsElements}
        </div>
    );
}

export default FriendsList;