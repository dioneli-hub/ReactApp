const ON_ADD_POST = 'ON-ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are u?', likes: 15},
        {id: 2, message: 'It\'s my first post', likes: 20},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ON_ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 7,
            };
            let newState = {...state};
            newState.postsData = [state.postsData];
            newState.postsData.push(newPost);
            newState.newPostText = '';
            return newState;}
        case UPDATE_NEW_POST_TEXT:{
            let newState = {...state};
            newState.newPostText = action.newText;
            return newState;}
        default:
            return state;

    }
}

export const onAddPostActionCreator = () => ({type: ON_ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;