const SET_ITEM_PRODUCT = 'SET_ITEM_PRODUCT';
const SET_SPECIFICATIONS_PRODUCT = 'SET_SPECIFICATIONS_PRODUCT';
const SET_LONG_URL = 'SET_LONG_URL';
const SET_ITEM_OBJ = 'SET_ITEM_OBJ';


let initialState = {
    product: [
        {id: 1, 
        name: 'Цветок такasdasdой то',
         price: '2380', 
         photo: {smal: 'url1', large: 'url2'},
          orders: 12,
           description: 'Бла-2', 
           views: '23',
           homePaymant:  true, 
           catId: [1, 3, 5, 7, 2], 
           specId: [2, 4, 9], 
           specifications: [{id: 2, name: 'цвет', value: 'Красный'}]}
        ],
    specificationItemProduct: [],
    longUrl: null,
    itemProductObj: {}
}

let productReduser = (state = initialState, action) => {
    switch(action.type) {
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