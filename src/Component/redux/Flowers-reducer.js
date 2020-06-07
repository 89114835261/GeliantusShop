const SET_FLOWERS = 'SET_FLOWERS';
const SET_COUNT_FLOWERS = 'SET_COUNT_FLOWERS';
const CHANGE_CURRENT_VALUE = 'CHANGE_CURRENT_VALUE';

let initialState = {
    flowers: [],
    countFlowers: null,
    currentValue: 1
}

const TopFlowers = (state = initialState, action) => {

    switch(action.type) {
        case SET_FLOWERS: 
            return {
                ...state,
                flowers: action.flowers
            }
        case SET_COUNT_FLOWERS:
            return {
              ...state,
              countFlowers: action.count
            }
        case CHANGE_CURRENT_VALUE:
           
            return {
                ...state,
                currentValue: action.value
            }
        default: return state;
    }
}

export let changeCurrentValueActionCreator = (value) => {
  
    return {
        type: CHANGE_CURRENT_VALUE,
        value: value
    }
}

export let setFlowersActionCreator = (flowers) => {
    return {
        type: SET_FLOWERS,
        flowers: flowers
    }
}

export let setCountFlowersActionCreator = (count) => {
  return {
    type: SET_COUNT_FLOWERS,
    count: count
  }
}

export default TopFlowers;