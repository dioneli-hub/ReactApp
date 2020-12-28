import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src='https://zagge.ru/wp-content/uploads/2016/12/Shake-02.jpg'/>
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}

export default Post;