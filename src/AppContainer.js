import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { setRouteActionCreator } from './Component/redux/App-reducer';
import {setMainUrlAC} from './Component/redux/Project-reducer';
import { withRouter, Route } from 'react-router-dom';

 class AppContainer extends React.Component {

    componentDidUpdate() {
        if(this.props.mainUrl != this.props.location.pathname) {
            this.props.setUrlAdress(this.props.location.pathname);
        }
    }

    render() {
         return(
             
            <App mainUrl={this.props.location.pathname}/>
         );
     }
 }

let mapStateToProps = (state) => {
    return {
        routeList: state.AppPage.routeList,
        mainUrl: state.Project.mainUrl
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (route) => {
            dispatch(setRouteActionCreator(route));
        },
        setUrlAdress: (url) => {
            dispatch(setMainUrlAC(url))
        }
    }
}

let withRouteAppContainer = withRouter(AppContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteAppContainer);