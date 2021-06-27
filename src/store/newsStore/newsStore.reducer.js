import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REMOVE_ALL_FAVORITES } from './newsStore.types';

const initialState = {
    favorites: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites.filter(favorite => favorite.title !== action.payload)]
            };
        case REMOVE_ALL_FAVORITES:
                return {
                ...state,
                favorites: []
            };
        default: {
            return state;
        }
    }
};

export default newsReducer;
