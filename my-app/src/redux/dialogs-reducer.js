const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ON_ADD_MESSAGE = 'ON-ADD-MESSAGE';


let initialState = {

    messagesData: [
        {id: 1, message: 'Hi!', author: 'Vadim', authorAvatar: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' },
        {id: 2, message: 'Yo!', author: 'Diana', authorAvatar: 'data:image/jpeg;base64,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'},
        {id: 3, message: 'How are u?!', author: 'Diana', authorAvatar: 'data:image/jpeg;base64,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'},
        {id: 4, message: 'Meow!', author: 'Vadim', authorAvatar: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'},
        {id: 5, message: 'Hey!!!', author: 'Diana', authorAvatar: 'data:image/jpeg;base64,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'}
    ],
    dialogsData: [
        {id: 1, name: 'Diana', avatar: 'data:image/jpeg;base64,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'},
        {id: 2, name: 'Vadim', avatar: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'},
        {id: 3, name: 'Nastya', avatar: 'https://i.pinimg.com/originals/4b/5d/1b/4b5d1b80c25d1992e0b47083876e15d8.png'},
        {id: 4, name: 'Yana', avatar: 'https://i.pinimg.com/originals/4b/5d/1b/4b5d1b80c25d1992e0b47083876e15d8.png'},
        {id: 5, name: 'Elena', avatar: 'https://i.pinimg.com/originals/52/bc/39/52bc3928fd63daa22ebfb555f9ae07dd.jpg'},
        {id: 6, name: 'Shamil', avatar: 'https://i.pinimg.com/originals/4b/5d/1b/4b5d1b80c25d1992e0b47083876e15d8.png'},
    ],

    newMessageText: '',
};

 const dialogsReducer = (state=initialState, action) => {

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