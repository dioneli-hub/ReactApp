import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hi, how are u?', likes: '15'},
    {id: 2, message: 'It\'s my first post', likes: '20'},
];

let dialogsData =
    [
        {id: 1, name: 'Diana'},
        {id: 2, name: 'Vadim'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Yana'},
        {id: 5, name: 'Elena'}
    ];

let messagesData =
    [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yo!'},
        {id: 3, message: 'How are u?!'},
        {id: 4, message: 'Meow!'},
        {id: 5, message: 'Hey!!!'}
    ];

ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
