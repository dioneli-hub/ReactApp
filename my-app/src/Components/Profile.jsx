import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://static.tildacdn.com/tild3138-6139-4638-b635-633165643863/photo.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post1
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;