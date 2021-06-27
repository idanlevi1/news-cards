import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    REMOVE_ALL_FAVORITES
} from './newsStore.types';

export function addNewsToFavorites(news) {
    return {
        type: ADD_TO_FAVORITES,
        payload: news
    }
}

export function removeNewsFromFavorites(news) {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: news,
    }
}

export function removeAllFavorites() {
    return {
        type: REMOVE_ALL_FAVORITES,
    }
}