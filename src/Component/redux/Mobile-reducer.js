const IS_OPEN_FIND = 'IS_OPEN_FIND';

let initialState = {
    isOpenFind: false
}

const FindReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_OPEN_FIND: 
        if(action.booleanType === true || action.booleanType === false) {
            return {
                ...state,
                isOpenFind: action.booleanType
            }
        } else return state.isOpenFind ? {...state, isOpenFind: false} : {...state, isOpenFind: true}
        default: return state;
    }
}

export const isOpenFindAC = (boolean) => {
    return {
        type: IS_OPEN_FIND,
        boolean
    }
}

export default FindReducer;