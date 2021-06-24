import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REMOVE_ALL_FAVORITES } from './newsStore.types';

const initialState = {
    favorites: []
};

const newsReducer = (state = initialState, action) => {
    console.log("newsReducer -> action", action)
    switch (action.type) {
        case ADD_TO_FAVORITES:
            console.log('REDUX', initialState)
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
                console.log("newsReducer -> REMOVE_FROM_FAVORITES", REMOVE_FROM_FAVORITES)
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
