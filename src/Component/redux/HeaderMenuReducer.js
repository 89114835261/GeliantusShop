const SET_MENU = 'SET_MENU';
const CHANGE_IS_OPEN_MENU = 'CHANGE_IS_OPEN_MENU';
const SET_MAIN_MENU = 'SET_MAIN_MENU';
const IS_OPEN_REGISTRATION_MODAL = 'IS_OPEN_REGISTRATION_MODAL';
const IS_OPEN_CART_MODAL = 'IS_OPEN_CART_MODAL';

let initialState =  {
    menu: null,
    isOpenMenu: false,
    mainMenu: null,
    isOpenRegistration: false,
    isOpenCart: false
}

const HeaderMenuReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.menu
            }
        case IS_OPEN_CART_MODAL:

        if(action.booleanType === true || action.booleanType === false) {
            return {
                ...state,
                isOpenCart: action.booleanType
            }
        } else return state.isOpenCart ? {...state, isOpenCart: false} : {...state, isOpenCart: true}
        case SET_MAIN_MENU:
            return {
                ...state,
                mainMenu: action.menu
            }
        case IS_OPEN_REGISTRATION_MODAL:
            if(action.booleanType === true || action.booleanType === false) {
                return  {
                    ...state,
                    isOpenRegistration: action.booleanType
                }
            } else return state.isOpenRegistration ? {...state, isOpenRegistration: false} : {...state, isOpenRegistration: true}
        case CHANGE_IS_OPEN_MENU:
            if(action.booleanType === true || action.booleanType === false) {
                return {
                    ...state,
                    isOpenMenu: action.booleanType
                } 
            } else return state.isOpenMenu ? {...state, isOpenMenu: false} : {...state, isOpenMenu: true}
        default: return state ;
    }
}

export let isOpenCartModalAC = (booleanType) => {
    return {
        type: IS_OPEN_CART_MODAL,
        booleanType
    }
}

export let isOpenRegistrationModalAC = (booleanType) => {
    return {
        type: IS_OPEN_REGISTRATION_MODAL,
        booleanType
    }
}

export const changeIsOpenMenuAC = (booleanType) => {
    return {
        type: CHANGE_IS_OPEN_MENU,
        booleanType
    }
}

export const SetMainMenuActionCreator = (menu) => {
    return {
        type: SET_MAIN_MENU,
        menu
    }
}

export const SetMenuActionCreator = (menu) => {
    return {
        type: SET_MENU,
        menu
    }
}

export default HeaderMenuReducer;

