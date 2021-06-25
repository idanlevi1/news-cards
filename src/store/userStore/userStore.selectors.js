import { createSelector } from 'reselect';
const baseNews = (state) => state.user

const isUserConnected = createSelector(
    baseNews,
    (user) => {
        return (user.isUserConnected)
    },
);

const getUserData = createSelector(
    baseNews,
    (user) => {
        return (user.userData)
    },
);


export {
    isUserConnected,
    getUserData
};
