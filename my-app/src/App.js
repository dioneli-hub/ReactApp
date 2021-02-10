import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Users from "./Components/Users/Users";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer store={props.store}/>
                {/*state={props.store.getState().navbarPage}*/}
                <div className='app-wrapper-content'>

                    <Route path='/profile'
                           render={()=> <Profile
                               store={props.store}
                           />}/>

                    <Route path='/dialogs'
                           render={()=> <DialogsContainer
                               store={props.store}
                           />}/>

                    <Route path='/users' render={()=> <Users/>}/>
                    <Route path='/news' render={()=> <News/>}/>
                    <Route path='/music' render={()=> <Music/>}/>
                    <Route path='/settings' render={()=> <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
