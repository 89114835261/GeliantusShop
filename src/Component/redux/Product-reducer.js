const SET_ITEM_PRODUCT = 'SET_ITEM_PRODUCT';


let initialState = {
    product: [
        {id: 10, 
        name: 'Лилия Босновнаяddddddddd', 
        price: '238asdasd0', 
        photos: {small: 'url1', large: 'url2'}, 
        orders: 6, preDescriptions: 'Бла-1', 
        fullDescription: 'Туasdasdasdaт будет большое спер пупер описанпие. Оно будет чёткой прям обосраться можно какое чёткое', 
        homePaymant: 'True',
        raiting: 4.7,
        voices: 54,
        countProducts: null     }
    ]
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