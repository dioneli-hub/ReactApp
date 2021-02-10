const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Vadim Prokopchuk', status: "I'm a boss",  location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Diana Levchenko', status: 'MRRR', location: {city: 'Molo', country: 'Belarus'}},
        {id: 3, followed: true, fullName: 'Nastya CH', status: "COOOL",  location: {city: 'Your dreams', country: 'Belarus'}},
        {id: 4, followed: false, fullName: 'Yana A.', status: 'Love romance', location: {city: 'Molo', country: 'Belarus'}},
    ],
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                   return  u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return  u;
                })
            }

        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;