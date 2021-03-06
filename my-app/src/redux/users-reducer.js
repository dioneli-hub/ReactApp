import {act} from "@testing-library/react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {id: 1, photoURL: 'https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg',followed: true, fullName: 'Vadim Prokopchuk', status: "I'm a boss",  location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoURL: 'https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg', followed: true, fullName: 'Diana Levchenko', status: 'MRRR', location: {city: 'Molo', country: 'Belarus'}},
        {id: 3, photoURL: 'https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg', followed: true, fullName: 'Nastya CH', status: "COOOL",  location: {city: 'Your dreams', country: 'Belarus'}},
        {id: 4, photoURL: 'https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg', followed: false, fullName: 'Yana A.', status: 'Love romance', location: {city: 'Molo', country: 'Belarus'}},
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
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return  u;
                })
            };
        case SET_USERS:
        return {...state, users: [...state.users, ...action.users]};


        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;