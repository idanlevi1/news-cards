import {
    LOGIN_USER,
    LOGOUT_USER,
    LOGIN_MODAL_VISIBLE
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

export function loginModalVisible(visible) {
    return {
        type: LOGIN_MODAL_VISIBLE,
        payload: visible
    }
}
