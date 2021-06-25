import { LOGIN_USER, LOGOUT_USER } from './userStore.types';

const initialState = {
    isConnectedUser: false,
    userData: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isConnectedUser: true,
                userData: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                isConnectedUser: true,
                userData: {}
            };
        default: {
            return state;
        }
    }
};

export default userReducer;
