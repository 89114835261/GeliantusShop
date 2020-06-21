const SET_MENU = 'SET_MENU';
const CHANGE_IS_OPEN_MENU = 'CHANGE_IS_OPEN_MENU'

let initialState =  {
    menu: [],
    isOpenMenu: false
}

const HeaderMenuReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.menu
            }
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

export const changeIsOpenMenuAC = (booleanType) => {
    return {
        type: CHANGE_IS_OPEN_MENU,
        bolleanType: booleanType
    }
}

export const SetMenuActionCreator = (menu) => {
    return {
        type: SET_MENU,
        menu: menu
    }
}

export default HeaderMenuReducer;

