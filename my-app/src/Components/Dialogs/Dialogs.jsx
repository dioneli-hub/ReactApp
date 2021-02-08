import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onAddMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);

    }

    let onAddMessage = () => {
        props.onAddMessage();
    };


    let newMessageElement = React.createRef();

    let dialogsElements = props.dialogsData.map( dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    );

    let messagesElements = props.messagesData.map( message =>
        <Message message={message.message} author={message.author} authorAvatar={message.authorAvatar}/>
    );

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={c.messages}>
                <div className={c.scrolling_area}>
                    {messagesElements}
                </div>
                <div className={c.textarea_container}>
                    <textarea className={c.styled_textarea}
                              onChange={onMessageChange}
                              value={props.newMessageText}/>
                    <button className={c.messages_styled_button} onClick={onAddMessage}>Send</button>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;