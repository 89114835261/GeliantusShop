const IS_OPEN = 'IS_OPEN';

let initialState = {
    isOpen: false
}

const FindReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_OPEN: 
        return {
            ...state,
            isOpen: action.boolean
        }
        default: return state;
    }
}

export const isOpenAC = (boolean) => {
    return {
        type: IS_OPEN,
        boolean
    }
}

export default FindReducer;