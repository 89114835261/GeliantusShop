const SET_CURRENT_OFFERS = 'SET_CURRENT_OFFERS';
const SET_CATEGORY_OFFERS = 'SET_CATEGORY_OFFERS';

let initialState = {
    currentOffers: null,
    cateforyOffers: null
}

const CurrentOffersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_OFFERS:
            return {
                ...state,
                currentOffers: action.offers
            }
        case SET_CATEGORY_OFFERS: 
            
            let newState = {...state};
            let setCat = () => {
                    let arr = [[],[],[],[]];
                    for(let i=0; i < state.currentOffers.length; i++ ) {
                        for(let z=0; z < state.currentOffers[i].catId.length; z++) {
                            let index = action.categoryOffers.findIndex(item => item.catId === state.currentOffers[i].catId[z]);
                            index && arr[i].push(action.categoryOffers[index]);
                        }
                }
                return arr;
            }
            newState.cateforyOffers = setCat();
            return newState;
        default: return state;
    }
}

export const setCategoryOffersAC = (categoryOffers) => {
    return {
        type: SET_CATEGORY_OFFERS,
        categoryOffers
    }
}

export const setCurrentOffersAC = (offers) => {
    return {
        type: SET_CURRENT_OFFERS,
        offers
    }
}

export default CurrentOffersReducer;