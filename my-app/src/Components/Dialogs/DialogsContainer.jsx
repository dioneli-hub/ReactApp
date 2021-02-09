import React from 'react';
import {onAddMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                let onAddMessage = () => {
                    store.dispatch(onAddMessageActionCreator());
                };


                return (
                    <Dialogs
                        onAddMessage={onAddMessage}
                        updateNewMessageText={onMessageChange}
                        dialogsData={state.dialogsPage.dialogsData}
                        messagesData={state.dialogsPage.messagesData}
                        newMessageText={state.dialogsPage.newMessageText}/>
                )
            }
            }
        </StoreContext.Consumer>
    )

};

export default DialogsContainer;