import { createSelector } from 'reselect';
const baseNews = (state) => state.user

const isUserConnectedSelector = createSelector(
    baseNews,
    (user) => (user.isConnectedUser),
);

const getUserDataSelector = createSelector(
    baseNews,
    (user) => {
        return (user.userData)
    },
);

const isLoginModalVisibleSelector = createSelector(
    baseNews,
    (user) => (user.isLoginModalVisible),
);


export {
    isUserConnectedSelector,
    getUserDataSelector,
    isLoginModalVisibleSelector
};
