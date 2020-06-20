const SET_URL_ELEMENTS = 'SET_URL_ELEMENTS';
const SET_CATIGORIES_TO_NAVBAR = 'SET_CATIGORIES_TO_NAVBAR';

let initialState = {
    urlElements: null,
    catigories: null
}

let NavBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATIGORIES_TO_NAVBAR:
            return {
                ...state,
                catigories: action.catigories
            }
        case SET_URL_ELEMENTS: 
            return {
                ...state,
                urlElements: action.elements
            }
        default: return state;
    }
}

export let setCategoriesAC = (catigories) => {
    return {
        type: SET_CATIGORIES_TO_NAVBAR,
        catigories: catigories
    }
}

export let setUrlElementsAC = (elements) => {
    return {
        type: SET_URL_ELEMENTS,
        elements: elements
    }
}

export default NavBarReducer;