import {
    LOGIN_USER,
    LOGOUT_USER,
} from './userStore.types';

export function loginUser(userData) {
    return {
        type: LOGIN_USER,
        payload: userData
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    }
}
