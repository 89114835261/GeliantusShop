import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { setRouteActionCreator } from './Component/redux/App-reducer';
import {setMainUrlAC} from './Component/redux/Project-reducer';
import { withRouter, Route } from 'react-router-dom';
import { changeIsOpenMenuAC } from './Component/redux/HeaderMenuReducer';

 class AppContainer extends React.Component {

    componentDidUpdate() {
        if(this.props.mainUrl != this.props.location.pathname) {
            this.props.setUrlAdress(this.props.location.pathname);
        }
    }

    render() {
         return(
             
            <App mainUrl={this.props.location.pathname} isOpenMenu={this.props.isOpenMenu} changeIsOpenMenu={this.props.changeIsOpenMenu}/>
         );
     }
 }

let mapStateToProps = (state) => {
    return {
        routeList: state.AppPage.routeList,
        mainUrl: state.Project.mainUrl,
        isOpenMenu: state.HeaderMenu.isOpenMenu
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (route) => {
            dispatch(setRouteActionCreator(route));
        },
        setUrlAdress: (url) => {
            dispatch(setMainUrlAC(url))
        },
        changeIsOpenMenu: (booleanType = ' ') => {
            dispatch(changeIsOpenMenuAC(booleanType))
        }
    }
}

let withRouteAppContainer = withRouter(AppContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteAppContainer);