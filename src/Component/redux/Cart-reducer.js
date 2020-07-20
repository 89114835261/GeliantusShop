const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_COUNT = 'CHANGE_COUNT';

let initialState = {
    productsCart: [],
    productsCount: 0,
    productsTotalPrice: 0,
    productsWeight: null,
    productsTotalCount: 0,
    swith: false
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_COUNT: {
            let newState = {...state};
            if(!action.boolean && newState.productsCart[action.id].count === 1) return newState;
            if(action.boolean) {
                newState.productsCart[action.id].count += 1;
                newState.productsCart[action.id].totalPrice += +newState.productsCart[action.id].price;
            } else {
                newState.productsCart[action.id].count -= 1;
                newState.productsCart[action.id].totalPrice -= +newState.productsCart[action.id].price;
            }
            newState.productsTotalCount = newState.productsCart.reduce((acc, product) => acc + product.count, 0)
            newState.productsTotalPrice = newState.productsCart.reduce((acc, product) => acc + +product.totalPrice, 0)
            newState.swith = newState.swith ? false : true;
            return newState;
        }
        case DELETE_PRODUCT: {
            let newState = {...state}
            newState.productsCart.splice(0, 1);
            newState.productsCount = state.productsCart.length;
            newState.productsTotalCount = newState.productsCart.reduce((acc, product) => acc + product.count, 0)
            newState.productsTotalPrice = newState.productsCart.reduce((acc, product) => acc + +product.totalPrice, 0)
            return newState;
        }
        case ADD_TO_CART: 
            let newState = {...state};
            let changeFunc = () => {
                if(!newState.productsCart.find(item => item.id === action.product.id)) {
                    newState.productsCount++;
                    newState.productsPrice += action.product.price;
                    return [...state.productsCart, action.product]
                } else return [...state.productsCart]
            }
            newState.productsCart = changeFunc();
            newState.productsTotalCount = newState.productsCart.reduce((acc, product) => acc + product.count, 0)
            newState.productsTotalPrice = newState.productsCart.reduce((acc, product) => acc + +product.totalPrice, 0)
            return newState;
        default: return state;
    }
}

export const changeCountAC = (id, boolean) => {
    return {
        type: CHANGE_COUNT,
        id,
        boolean
    }
}

export const deleteProductAC = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
}

export const addToCartAC = (product) => {
    return {
        type: ADD_TO_CART,
        product: {...product, count: 1, totalPrice: product.price}
    }
}

export default CartReducer;