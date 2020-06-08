const SET_FLOWERS = 'SET_FLOWERS';
const SET_COUNT_FLOWERS = 'SET_COUNT_FLOWERS';
const CHANGE_CURRENT_VALUE = 'CHANGE_CURRENT_VALUE';
const SET_PAGE_NAME = 'SET_PAGE_NAME';
const SET_COVER_PAGE = 'SET_COVER_PAGE';

let initialState = {
    flowers: [],
    countFlowers: null,
    currentValue: 1,
    pageName: '',
    coverPage: ''
}

const TopFlowers = (state = initialState, action) => {

    switch(action.type) {
        case SET_FLOWERS: 
            return {
                ...state,
                flowers: action.flowers
            }
        case SET_COVER_PAGE:
            return {
                ...state,
                coverPage: action.url
            }
        case SET_COUNT_FLOWERS:
            return {
              ...state,
              countFlowers: action.count
            }
        case SET_PAGE_NAME: 
            return {
                ...state,
                pageName: action.name
            }
        case CHANGE_CURRENT_VALUE:
           
            return {
                ...state,
                currentValue: action.value
            }
        default: return state;
    }
}

export let setCoverPageActionCreator = (url) => {
    return {
        type: SET_COVER_PAGE,
        url: url
    }
}

export let setPageNameActionCreator = (name) => {
    return {
        type: SET_PAGE_NAME,
        name: name
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