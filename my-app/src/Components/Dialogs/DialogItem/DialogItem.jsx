import React from 'react';
import c from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/dialogs/"+ props.id;

    return(
        <div className={c.dialog}>
            <div >
                <img className={c.dialogImg} src={props.avatar}/>
            </div>

            <div>
                <NavLink to={path}>
                    {props.name}
                </NavLink>
            </div>

        </div>
    );
};

export default DialogItem;