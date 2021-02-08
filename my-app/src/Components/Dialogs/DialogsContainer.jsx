import React from 'react';
import {onAddMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state = props.store.getState();
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    let onAddMessage = () => {
        props.store.dispatch(onAddMessageActionCreator());
    };


    return (
        <Dialogs
            onAddMessage={onAddMessage}
            updateNewMessageText={onMessageChange}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
            newMessageText={state.dialogsPage.newMessageText}/>
    )
};

export default DialogsContainer;