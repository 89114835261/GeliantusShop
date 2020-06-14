import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { withRouter, NavLink } from 'react-router-dom';
import {setUrlElementsAC} from './../redux/NavBar-reducer';
import {setMainUrlAC, translitText} from './../redux/Project-reducer';

class WayLineContainer extends React.Component {
    componentWillMount() {
        this.props.setUrlElements(this.props.location.pathname.split('/'));
    }
    componentDidUpdate() {
        if(this.props.mainUrl != this.props.location.pathname) {
            this.props.setUrlAdress(this.props.location.pathname);
            this.componentWillMount();
        }
    }
    render() {
        return(
            <NavBar translitText={translitText} mainUrl={this.props.mainUrl} visualElementsUrlArr={this.props.urlElements}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        urlElements: state.NavBar.urlElements,
        mainUrl: state.Project.mainUrl
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUrlElements: (elements) => {
            dispatch(setUrlElementsAC(elements))
        },
        setUrlAdress: (url) => {
            dispatch(setMainUrlAC(url))
        },
    }
}


let withRouteWayLine = withRouter(WayLineContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteWayLine);