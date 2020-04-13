import { ALL_QUOTE_LOADED, RANDOM_QUOTE_LOADED, ERROR_LOADING_DATA } from '../actions/postListActions';

const initStore = {
    quotes: [],
    error: null
}
const randomQuoteObject = {
    randomQuote:{},
    error: null
}

export const allQuotes = (initialState = initStore, action) => {
    if (action.type === ALL_QUOTE_LOADED) {
        return { ...initialState, quotes: action.payload }
    }
    if(action.type === ERROR_LOADING_DATA){
        return{...initialState, error:action.payload}
    }
    return initialState;
}

export const randomQuote = (initialState = randomQuoteObject, action) => {
    if (action.type === RANDOM_QUOTE_LOADED) {
        return { ...initialState, randomQuote: action.payload }
    }
    if(action.type === ERROR_LOADING_DATA){
        return{...initialState, error:action.payload}
    }
    return initialState;
}