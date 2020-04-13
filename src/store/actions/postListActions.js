export const DATA_LOADED = 'DATA LOADED';
const START_LOADING_DATA = 'START LOADING DATA';
export const RANDOM_QUOTE_LOADED = 'RANDOM_QUOTE_LOADED';
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";


const api = 'https://programming-quotes-api.herokuapp.com';

export const getAllQuotes = () => {
    //повернемо функцію
    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });

        fetch(`${api}/quotes`)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: DATA_LOADED, payload: res })
                console.log(res)
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }

}


export const getRandomQuotes = () => {
    //повернемо функцію
    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });

        fetch(`${api}/quotes/random`)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: RANDOM_QUOTE_LOADED, payload: res })
                console.log(res)
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }

}
