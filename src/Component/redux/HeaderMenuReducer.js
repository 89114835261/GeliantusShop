const SET_MENU = 'SET_MENU';


let initialState =  {
    menu: [
        
    ]
}

const HeaderMenuReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MENU:
           
            return {
                ...state,
                menu: action.menu
            }
        default: return state ;
    }
}

export const SetMenuActionCreator = (menu) => {
    return {
        type: SET_MENU,
        menu: menu
    }
}

export default HeaderMenuReducer;

