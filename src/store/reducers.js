import { combineReducers } from 'redux'
import newsReducer from './newsStore/newsStore.reducer'

const reducers = combineReducers({
    news: newsReducer,
});


export default reducers;