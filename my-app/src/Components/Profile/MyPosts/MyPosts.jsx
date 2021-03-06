import c from './MyPosts.module.css';
import React from 'react';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () => {
        props.onAddPost();
    };
    let newPostElement = React.createRef();

    let postsElements = props.profilePage.postsData.map(p =>
        <Post message={p.message} likes={p.likes}/>
    );
    
    return (
        <div className={c.posts_block}>
            <h3>My posts</h3>
            <div className={c.adding_post_container}>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.profilePage.newPostText}
                              className={c.styled_textarea}
                              />
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