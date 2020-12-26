import './App.css';
import React from 'react';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_1280.png'/>
            </header>

            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>

            <div className='content'>
                <div>
                    <img src='https://static.tildacdn.com/tild3138-6139-4638-b635-633165643863/photo.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New Post
                    </div>
                    <div>
                        post1
                    </div>
                    <div>
                        post1
                    </div>
                </div>
            </div>

        </div>
  );
}

export default App;
