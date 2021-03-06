import {combineReducers, createStore, applyMiddleware} from "redux";
import {allQuotes, randomQuote} from './reducers/postListReducer';
import thunk from 'redux-thunk';
import {compose} from 'redux';

const reducers = combineReducers({allQuotes:allQuotes, randomQuote:randomQuote});


const enchancedMiddleware = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(reducers, enchancedMiddleware)