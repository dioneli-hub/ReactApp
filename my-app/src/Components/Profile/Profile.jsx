import React from 'react';
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img src='https://static.tildacdn.com/tild3138-6139-4638-b635-633165643863/photo.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;