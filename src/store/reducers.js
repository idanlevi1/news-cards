import { combineReducers } from 'redux'
import newsReducer from './newsStore/newsStore.reducer'
import userReducer from './userStore/userStore.reducer'

const reducers = combineReducers({
    news: newsReducer,
    user: userReducer,
});


export default reducers;