const SET_LONG_URL_MAIN_PAGE = 'SET_LONG_URL_MAIN_PAGE';

let initialState = {
    longUrlMain: null
}

let MainReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_LONG_URL_MAIN_PAGE: 
  
        return {
            ...state,
            longUrlMain: action.long
        }
        default: return state;
    }
}

export let setMainLongUrlAC = (long) => {
    return {
        type: SET_LONG_URL_MAIN_PAGE,
        long: long
    }
}

export default MainReducer;
