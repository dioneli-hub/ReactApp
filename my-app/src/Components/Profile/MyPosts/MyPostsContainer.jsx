import React from 'react';
import {onAddPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    let onAddPost = () => {
        props.store.dispatch(onAddPostActionCreator());
    };
    
    return (
        <MyPosts updateNewPostText={onPostChange}
                onAddPost={onAddPost}
                postsData={state.profilePage.postsData}
                newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;