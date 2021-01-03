import c from './MyPosts.module.css';
import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={c.posts}>
                <Post message='Hi, how are u?' likes='15'/>
                <Post message="It's my first post" likes='20'/>
            </div>
        </div>
    );
}

export default MyPosts;