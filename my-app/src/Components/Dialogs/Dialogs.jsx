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

    let dialogsElements = dialogsData.map( dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = messagesData.map( message =>
        <Message message={message.message}/>
    );

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;