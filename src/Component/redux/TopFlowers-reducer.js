const SET_TOP_FLOWERS = 'SET_TOP_FLOWERS';
const SET_COUNT_TOP_FLOWERS = 'SET_COUNT_TOP_FLOWERS';

let initialState = {
    topFlowers: [],
    countTopFlowers: null
}

const TopFlowers = (state = initialState, action) => {

    switch(action.type) {
        case SET_TOP_FLOWERS: 
            return {
                ...state,
                topFlowers: action.flowers
            }
        case SET_COUNT_TOP_FLOWERS:
            return {
              ...state,
              countTopFlowers: action.count
            }
        default: return state;
    }
}


export let setTopFlowersActionCreator = (flowers) => {
    return {
        type: SET_TOP_FLOWERS,
        flowers: flowers
    }
}

export let setCountTopFlowersActionCreator = (count) => {
  return {
    type: SET_COUNT_TOP_FLOWERS,
    count: count
  }
}

export default TopFlowers;