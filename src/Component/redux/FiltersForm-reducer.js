const SET_SPECIFICATIONS = 'SET_SPECIFICATIONS';

let initialState = {
    specifications: null
}

const FiltersFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SPECIFICATIONS: 
            return {
                ...state,
                specifications: action.specifications
            }
        default: return state
    }
}

export const setSpecificationsActionCreator = (specifications) => {
    return {
        type: SET_SPECIFICATIONS,
        specifications: specifications
    }
}

export default FiltersFormReducer;