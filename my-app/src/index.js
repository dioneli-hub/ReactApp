import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import App from './App';


export let rerenderEntireTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} onAddPost={store.onAddPost.bind(store)} onAddMessage={store.onAddMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.state);

store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a functionstore.
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
