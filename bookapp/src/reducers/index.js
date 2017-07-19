import {combineReducers} from 'redux';
import BookReducer from './books';
import ActiveBook from './activeBook';

const rootReducer = combineReducers({
    books: BookReducer,
    activeBook: ActiveBook,
});

export default rootReducer;