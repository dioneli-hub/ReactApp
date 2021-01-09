const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ON_ADD_MESSAGE = 'ON-ADD-MESSAGE';

 const dialogsReducer = (state, action) => {

     switch (action.type){
         case ON_ADD_MESSAGE:
             let newMessage = {
                 id: 5,
                 message: state.newMessageText,
                 author: 'Vadim',
                 authorAvatar: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',

             };
             state.messagesData.push(newMessage);
             state.newMessageText = '';
             return  state;
         case UPDATE_NEW_MESSAGE_TEXT:
             state.newMessageText = action.newText;
             return state;
         default:
             return state;
     }
}


export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export const onAddMessageActionCreator = () => ({type: ON_ADD_MESSAGE});

export default dialogsReducer;