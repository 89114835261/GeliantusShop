const SET_ROUTE = 'SET_ROUTE';

let initialState = {
    routeList: []
}

const AppPage = (state = initialState, action) => {
    switch(action.type) {
        case SET_ROUTE:
            return {
                ...state,
                routeList: action.routeList
            }
        default: return state
    }
}

export const setRouteActionCreator = (route) => {
    return {
        type: SET_ROUTE,
        routeList: route
    }
}

export default AppPage