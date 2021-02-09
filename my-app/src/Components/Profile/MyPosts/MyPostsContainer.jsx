import React from 'react';
import {onAddPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                let onAddPost = () => {
                    store.dispatch(onAddPostActionCreator());
                };

                return <MyPosts updateNewPostText={onPostChange}
                                onAddPost={onAddPost}
                                postsData={state.profilePage.postsData}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;