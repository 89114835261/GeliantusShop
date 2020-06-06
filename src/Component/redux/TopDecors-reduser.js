const SET_TOP_DECORS = 'SET_TOP_DECORS';
const SET_COUNT_DECORS = 'SET_COUNT_DECORS';

let initialState = {
    topDecors: [],
    countDecors: null
}

const TopDecors = (state = initialState, action) => {

    switch(action.type) {
        case SET_TOP_DECORS: 
            return {
                ...state,
                topDecors: action.decors
            }
        case SET_COUNT_DECORS:
            return {
              ...state,
              countDecors: action.count
            }
        default: return state;
    }
}


export let setDecorsActionCreator = (decors) => {
    return {
        type: SET_TOP_DECORS,
        decors: decors
    }
}

export let setCountDecorsActionCreator = (count) => {
  return {
    type: SET_COUNT_DECORS,
    count: count
  }
}

export default TopDecors;