import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {onAddMessage, onAddPost, updateNewMessageText, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} onAddPost={onAddPost} onAddMessage={onAddMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};


