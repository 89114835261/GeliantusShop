const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_COUNT_PRODUCTS = 'SET_COUNT_PRODUCTS';

let initialState = {
    products: null,
    countProducts: null
}

const TopProducts = (state = initialState, action) => {

    switch(action.type) {
        case SET_PRODUCTS: 
            return {
                ...state,
                products: action.products
            }
        case SET_COUNT_PRODUCTS:
            return {
              ...state,
              countProducts: action.count
            }
        default: return state;
    }
}

export let setProductsActionCreator = (products) => {
    return {
        type: SET_PRODUCTS,
        products: products
    }
}

export let setCountProductsActionCreator = (count) => {
  return {
    type: SET_COUNT_PRODUCTS,
    count: count
  }
}

export default TopProducts;