import { LOGIN_USER, LOGOUT_USER, LOGIN_MODAL_VISIBLE } from './userStore.types';

const initialState = {
    isConnectedUser: false,
    userData: {},
    isLoginModalVisible: false
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
                isConnectedUser: false,
                userData: {}
            };
        case LOGIN_MODAL_VISIBLE:
        console.log("userReducer -> LOGIN_MODAL_VISIBLE", LOGIN_MODAL_VISIBLE)
            return {
                ...state,
                isLoginModalVisible: action.payload
            };
        default: {
            return state;
        }
    }
};

export default userReducer;
