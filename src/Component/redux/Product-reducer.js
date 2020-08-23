const SET_ITEM_PRODUCT = 'SET_ITEM_PRODUCT';
const SET_SPECIFICATIONS_PRODUCT = 'SET_SPECIFICATIONS_PRODUCT';
const SET_LONG_URL = 'SET_LONG_URL';
const SET_ITEM_OBJ = 'SET_ITEM_OBJ';
const ITEM_PRODUCT_COVER = 'ITEM_PRODUCT_COVER';
const IS_OPEN_FULL_IMAGE = 'IS_OPEN_FULL_IMAGE';
const SET_REVIEWS = 'SET_REVIEWS';
const SET_ANSWERS = 'SET_ANSWERS';
const SET_IS_VISIBLE_ANSWER = 'SET_IS_VISIBLE_ANSWER';
const SET_QUESTIONS = 'SET_QUESTIONS';
const IS_SCROLL_IMAGE = 'IS_SCROLL_IMAGE';

let initialState = {
    product: null,
    fullPhoto: null,
    specificationItemProduct: null,
    longUrl: null,
    itemProductObj: {},
    productCover: null,
    isOpenFullImage: false,
    reviews: null,
    answers: [],
    isLoadAnswer: false,
    questions: null,
    scrollPosition: 1
}

let productReduser = (state = initialState, action) => {
    switch(action.type) {
        case ITEM_PRODUCT_COVER:
            return {
                ...state,
                productCover: action.url
            }
        case IS_SCROLL_IMAGE: 
        if(action.defNum === 1) {
            return {...state,
                scrollPosition: 1
            }
        }
            return (action.boolean === true && state.product[0].photo.length !== state.scrollPosition) ? {
                ...state,
                scrollPosition: state.scrollPosition + 1
            } : (action.boolean === false && state.scrollPosition > 1) ? {...state, scrollPosition: state.scrollPosition - 1} : {...state}
        case SET_IS_VISIBLE_ANSWER: 
            let newState = {...state};
            newState.answers = state.answers.map(item => {if(item.reviewsId == action.id) {return {id: item.id, userId: item.userId, userName: item.userName, userAvatar: item.userAvatar, reviewsId: item.reviewsId, productId: item.productId, text: item.text, isVisible: item.isVisible ? false : true, isIncognito: item.isIncognito, likes: item.likes, dislikes: item.dislikes}} else return item})
            return newState;
            case SET_ANSWERS: 
            return {
                ...state,
                answers: action.answers
            }
        case SET_QUESTIONS:
            let questionsArr = action.questions.filter(item => item.productId === state.product[0].id)
            return {
                ...state,
                questions: questionsArr
            }
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews
            }
        case IS_OPEN_FULL_IMAGE:
           return state.isOpenFullImage ? {...state, isOpenFullImage: false} : {...state, isOpenFullImage: true, fullPhoto: action.fullPhoto}
        case SET_ITEM_PRODUCT: 
                return action.product ? {...state, product: [action.product[action.itemId - 1]]} : {...state, product: null}
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

export let isScrollImageAC = (boolean, defNum) => {
    return {
        type: IS_SCROLL_IMAGE,
        boolean,
        defNum
    }
}

export let setQuestionsAC = (questions) => {
    return {
        type: SET_QUESTIONS,
        questions
    }
}

export let setIsVisibleAC = (id) => {
    return {
        type: SET_IS_VISIBLE_ANSWER,
        id: id
    }
}

export let setReviewsAnswerAC = (answers) => {
    return {
        type: SET_ANSWERS,
        answers: answers
    }
}

export let setReviewsAC = (reviews) => {
    return {
        type: SET_REVIEWS,
        reviews: reviews
    }
}

export let isOpenFullImageAC = (fullPhoto) => {
    return {
        type: IS_OPEN_FULL_IMAGE,
        fullPhoto
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