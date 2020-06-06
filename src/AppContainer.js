import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { setRouteActionCreator } from './Component/redux/App-reducer';

let mapStateToProps = (state) => {
    return {
        routeList: state.AppPage.routeList 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (route) => {
            dispatch(setRouteActionCreator(route));
        }
    }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps) (App);

export default AppContainer;