import React from 'react';
import c from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={c.main_picture}>
                <img src='https://static.tildacdn.com/tild3138-6139-4638-b635-633165643863/photo.jpg'/>
            </div>
            <div className={c.description_block}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;