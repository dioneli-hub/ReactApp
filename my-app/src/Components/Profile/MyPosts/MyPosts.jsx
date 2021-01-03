import c from './MyPosts.module.css';
import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are u?', likes: '15'},
        {id: 2, message: 'It\'s my first post', likes: '20'},
    ];

    let postsElements = postsData.map(p =>
        <Post message={p.message} likes={p.likes}/>
    );
    
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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;