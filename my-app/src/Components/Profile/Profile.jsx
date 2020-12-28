import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={c.main_picture}>
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