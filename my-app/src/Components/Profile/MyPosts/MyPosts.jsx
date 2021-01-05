import c from './MyPosts.module.css';
import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let onAddPost = () => {
        let text = newPostElement.current.value;
        props.onAddPost(text);
    };
    let newPostElement = React.createRef();

    let postsElements = props.postsData.map(p =>
        <Post message={p.message} likes={p.likes}/>
    );
    
    return (
        <div className={c.posts_block}>
            <h3>My posts</h3>
            <div className={c.adding_post_container}>
                <div>
                    <textarea className={c.styled_textarea} ref={newPostElement}/>
                </div>
                <div className={c.buttons_container}>
                    <button onClick={ onAddPost } className={c.styled_button}>Add new post</button>
                    <button className={c.styled_button}>Remove</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;