const SET_ITEM_PRODUCT = 'SET_ITEM_PRODUCT';


let initialState = {
    product: []
}

let productReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_ITEM_PRODUCT: 
            return {
                ...state,
                product: action.product
            }
        default: return state;
    }
}


export let setProductActionCreator = (product) => {
    return {
        type: SET_ITEM_PRODUCT,
        product: product
    }
}

export default productReduser;