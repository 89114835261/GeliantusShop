const SET_FLOWERS = 'SET_FLOWERS';
const SET_COUNT_FLOWERS = 'SET_COUNT_FLOWERS';

let initialState = {
    flowers: [],
    countFlowers: null
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
        default: return state;
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