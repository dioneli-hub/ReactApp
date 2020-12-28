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
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;