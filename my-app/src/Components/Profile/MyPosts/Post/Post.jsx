import React from 'react';
import c from './Post.module.css';

const Post = () => {
    return (
        <div className={c.item}>
            <img src='https://zagge.ru/wp-content/uploads/2016/12/Shake-02.jpg'/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;