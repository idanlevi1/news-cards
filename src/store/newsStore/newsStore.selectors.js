import { createSelector } from 'reselect';
const baseNews = (state) => state.news;

const favoritesSelector = createSelector(
    baseNews,
    (news) => {
        return (news.favorites)
    },
);


export {
    favoritesSelector,
};
