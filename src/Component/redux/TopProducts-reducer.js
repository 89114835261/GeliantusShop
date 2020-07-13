const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_COUNT_PRODUCTS = 'SET_COUNT_PRODUCTS';
const SET_TOP_PRODUCTS = 'SET_TOP_PRODUCTS';
const SET_NAME_TOP_PRODUCTS_BOX = 'SET_NAME_TOP_PRODUCTS_BOX';
const SET_SORT_PARAMETER = 'SET_SORT_PARAMETER';
const SET_PRODUCTS_CAT_ID = 'SET_PRODUCTS_CAT_ID';

let initialState = {
    topProducts: null,
    countProducts: null,
    topProductsName: null,
    sortParameter: null,
    topProductsCatId: null
}

const TopProducts = (state = initialState, action) => {

    switch(action.type) {
        case SET_TOP_PRODUCTS: 
        let newState = {...state};
        newState.topProducts = action.arr.filter(item => 
            {for(let i = 0; i < item.catId.length; i++) {
                if(item.catId[i] == action.id) return item;
            }});
        return newState;
        case SET_SORT_PARAMETER:
            return {
                ...state,
                sortParameter: action.parameter
            }
        case SET_NAME_TOP_PRODUCTS_BOX:
            return {
                ...state,
                topProductsName: action.name
            }   
        case SET_COUNT_PRODUCTS:
            return {
              ...state,
              countProducts: action.count
            }
        case SET_PRODUCTS_CAT_ID: 
            return {
                ...state,
                topProductsCatId: action.arr
            }
        default: return state;
    }
}

export let setSortParameterAC = (parameter) => {
    return {
        type: SET_SORT_PARAMETER,
        parameter
    }
}

export let topProductsNameAC = (name) => {
    return {
        type: SET_NAME_TOP_PRODUCTS_BOX,
        name
    }
}

export let setTopProductsAC = (arr, id) => {
    return {
        type: SET_TOP_PRODUCTS,
        arr,
        id
    }
}

export let setTopProductsCatidAC = (arr) => {
    return {
        type: SET_PRODUCTS_CAT_ID,
        arr
    }
}


export let setCountProductsActionCreator = (count) => {
  return {
    type: SET_COUNT_PRODUCTS,
    count: count
  }
}

export default TopProducts;