import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map( dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    );

    let messagesElements = props.state.messagesData.map( message =>
        <Message message={message.message} author={message.author} authorAvatar={message.authorAvatar}/>
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