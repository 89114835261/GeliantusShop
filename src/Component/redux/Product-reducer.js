const SET_ITEM_PRODUCT = 'SET_ITEM_PRODUCT';
const SET_SPECIFICATIONS_PRODUCT = 'SET_SPECIFICATIONS_PRODUCT';
const SET_LONG_URL = 'SET_LONG_URL';
const SET_ITEM_OBJ = 'SET_ITEM_OBJ';
const ITEM_PRODUCT_COVER = 'ITEM_PRODUCT_COVER';


let initialState = {
    product: null,
    specificationItemProduct: [],
    longUrl: null,
    itemProductObj: {},
    productCover: null
}

let productReduser = (state = initialState, action) => {
    switch(action.type) {
        case ITEM_PRODUCT_COVER:
            return {
                ...state,
                productCover: action.url
            }
        case SET_ITEM_PRODUCT: 
            return {
                ...state,
                product: [action.product[action.itemId - 1]]
            }
            case  SET_ITEM_OBJ: 
                return {
                    ...state,
                    itemProductObj: action.obj
                }
        case SET_LONG_URL: 
        return {
            ...state,
            longUrl: action.long
        }
        case SET_SPECIFICATIONS_PRODUCT: 
        return {
            ...state,
            specificationItemProduct: action.speccifications
        }
        default: return state;
    }
}

export let setItemProductCoverAC = (url) => {
    return {
        type: ITEM_PRODUCT_COVER,
        url: url
    }
}

export let setitemProductObjActionCreator = (obj) => {
    return {
        type: SET_ITEM_OBJ,
        obj: obj
    }
}

export let setLongUrlActionCreator = (long) => {
    return {
        type: SET_LONG_URL,
        long: long
    }
}

export let setSpecificationsItemProductAC = (speccifications) => {
    return {
        type: SET_SPECIFICATIONS_PRODUCT,
        speccifications: speccifications
    }
}

export let setProductActionCreator = (product, itemId) => {
    return {
        type: SET_ITEM_PRODUCT,
        product: product,
        itemId: itemId
    }
}

export default productReduser;