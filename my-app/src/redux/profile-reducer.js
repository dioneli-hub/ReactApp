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
        case ON_ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 5,
                    message: text,
                    likes: 7
                }],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        default:
            return state;

    }
}

export const onAddPostActionCreator = () => ({type: ON_ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;