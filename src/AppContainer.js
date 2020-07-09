import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { setRouteActionCreator } from './Component/redux/App-reducer';
import {setMainUrlAC} from './Component/redux/Project-reducer';
import { withRouter } from 'react-router-dom';
import { changeIsOpenMenuAC, isOpenRegistrationModalAC, isOpenCartModalAC} from './Component/redux/HeaderMenuReducer';

 class AppContainer extends React.Component {

    componentDidUpdate() {
        if(this.props.mainUrl != this.props.location.pathname) {
            this.props.setUrlAdress(this.props.location.pathname);
        }
    }
    
    render() {
         return(
             
            <App productsCount={this.props.productsCount} isOpenCartModal={this.props.isOpenCartModal} isOpenCart={this.props.isOpenCart} isOpenRegistrationModal={this.props.isOpenRegistrationModal} isOpenRegistration={this.props.isOpenRegistration} mainUrl={this.props.location.pathname} isOpenMenu={this.props.isOpenMenu} changeIsOpenMenu={this.props.changeIsOpenMenu}/>
         );
     }
 }

let mapStateToProps = (state) => {
    return {
        routeList: state.AppPage.routeList,
        mainUrl: state.Project.mainUrl,
        isOpenMenu: state.HeaderMenu.isOpenMenu,
        isOpenRegistration: state.HeaderMenu.isOpenRegistration,
        isOpenCart: state.HeaderMenu.isOpenCart,
        productsCount: state.CartReducer.productsCount
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
        },
        isOpenRegistrationModal: (booleanType = ' ') => {
            dispatch(isOpenRegistrationModalAC(booleanType));
        },
        isOpenCartModal: (booleanType = ' ') => {
            dispatch(isOpenCartModalAC(booleanType));
        }
    }
}

let withRouteAppContainer = withRouter(AppContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteAppContainer);