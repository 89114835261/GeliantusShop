const SET_ITEM_PRODUCT = 'SET_ITEM_PRODUCT';
const SET_SPECIFICATIONS_PRODUCT = 'SET_SPECIFICATIONS_PRODUCT';


let initialState = {
    product: [],
    specificationItemProduct: []
}

let productReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_ITEM_PRODUCT: 
            return {
                ...state,
                product: action.product
            }
        case SET_SPECIFICATIONS_PRODUCT: 
        return {
            ...state,
            specificationItemProduct: action.speccifications
        }
        default: return state;
    }
}

export let setSpecificationsItemProductAC = (speccifications) => {
    return {
        type: SET_SPECIFICATIONS_PRODUCT,
        speccifications: speccifications
    }
}

export let setProductActionCreator = (product) => {
    return {
        type: SET_ITEM_PRODUCT,
        product: product
    }
}

export default productReduser;