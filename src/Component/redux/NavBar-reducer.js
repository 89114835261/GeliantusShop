const SET_URL_ELEMENTS = 'SET_URL_ELEMENTS';

let initialState = {
    urlElements: null
}

let NavBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_URL_ELEMENTS: 
        
            return {
                ...state,
                urlElements: action.elements
            }
        default: return state;
    }
}

export let setUrlElementsAC = (elements) => {
    return {
        type: SET_URL_ELEMENTS,
        elements: elements
    }
}

export default NavBarReducer;