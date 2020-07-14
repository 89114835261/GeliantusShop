const SET_CURRENT_OFFERS = 'SET_CURRENT_OFFERS';

let initialState = {
    currentOffers: null
}

const CurrentOffersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_OFFERS:
            return {
                ...state,
                currentOffers: action.offers
            }
        default: return state;
    }
}

export const setCurrentOffersAC = (offers) => {
    return {
        type: SET_CURRENT_OFFERS,
        offers
    }
}

export default CurrentOffersReducer;