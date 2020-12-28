import c from './MyPosts.module.css';
import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add new post</button>
                <button>Remove</button>
            </div>
            <div className={c.posts}>
                <Post message='Hi, how are u?' likes='15'/>
                <Post message="It's my first post" likes='20'/>
            </div>
        </div>
    );
}

export default MyPosts;