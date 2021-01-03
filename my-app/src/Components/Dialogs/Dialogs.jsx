import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/dialogs/"+ props.id;

    return(
        <div className={c.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={c.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>

                <DialogItem name="Diana" id="1"/>
                <DialogItem name="Vadim" id="2"/>
                <DialogItem name="Nastya" id="3"/>
                <DialogItem name="Yana" id="4"/>
                <DialogItem name="Azisha" id="5"/>

            </div>

            <div className={c.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Cool! Yo!"/>
            </div>
        </div>
    )
};

export default Dialogs;