const SET_LONG_URL_MAIN_PAGE = 'SET_LONG_URL_MAIN_PAGE';
const SET_PRODUCTS_CAT_ID = 'SET_PRODUCTS_CAT_ID';
const SET_TOP_PRODUCTS = 'SET_TOP_PRODUCTS';

let initialState = {
    longUrlMain: null,
    TopProductsCatId: null,
    topProductsBoxOne: null,
    topProductsBoxTwo: null,
    topProductsBoxThree: null,
    boxNameOne: 'name1',
    boxNameTwo: 'name2',
    boxNameThree: 'name3'
}

let MainReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_LONG_URL_MAIN_PAGE: 
        return {
            ...state,
            longUrlMain: action.long
        }
    case SET_TOP_PRODUCTS: 
        let newState = {...state};
        if(action.boxNumber === 1) {
            newState.topProductsBoxOne = action.arr.filter(item => 
                {for(let i = 0; i < item.catId.length; i++) {
                    if(item.catId[i] == action.id) return item;
                }});
        } else if (action.boxNumber === 2) {
            newState.topProductsBoxTwo = action.arr.filter(item => 
                {for(let i = 0; i < item.catId.length; i++) {
                    if(item.catId[i] == action.id) return item;
                }});
        } else {
            newState.topProductsBoxThree = action.arr.filter(item => 
                {for(let i = 0; i < item.catId.length; i++) {
                    if(item.catId[i] == action.id) return item;
                }});
        }
        return newState;
    case SET_PRODUCTS_CAT_ID: 
        return {
            ...state,
            TopProductsCatId: action.arr
        }
        default: return state;
    }
}

export let setTopProductsAC = (arr, id, boxNumber) => {
    return {
        type: SET_TOP_PRODUCTS,
        arr,
        id,
        boxNumber
    }
}

export let setTopProductsCatidAC = (arr) => {
    return {
        type: SET_PRODUCTS_CAT_ID,
        arr
    }
}

export let setMainLongUrlAC = (long) => {
    return {
        type: SET_LONG_URL_MAIN_PAGE,
        long: long
    }
}

export default MainReducer;
