import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { withRouter, NavLink } from 'react-router-dom';
import {setUrlElementsAC, setCategoriesAC} from './../redux/NavBar-reducer';
import {setMainUrlAC, translitText} from './../redux/Project-reducer';
import Axios from 'axios';

class WayLineContainer extends React.Component {
    componentWillMount() {
        this.props.setUrlElements(this.props.location.pathname.split('/'));
    }
    componentDidMount() {
        {Axios.get('/Categories.json').then(response => {this.props.setCategories(response.data)})}
    }
  
    componentDidUpdate() {
        if(this.props.mainUrl != this.props.location.pathname) {
            this.props.setUrlAdress(this.props.location.pathname);
            this.componentWillMount();
        }
    }

    render() {
        return(
            <NavBar catigories={this.props.catigories} itemCategory={this.props.itemCategory} product={this.props.product} translitText={translitText} mainUrl={this.props.mainUrl} visualElementsUrlArr={this.props.urlElements}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        urlElements: state.NavBar.urlElements,
        mainUrl: state.Project.mainUrl,
        product: state.Product.product,
        catigories: state.NavBar.catigories
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUrlElements: (elements) => {
            dispatch(setUrlElementsAC(elements))
        },
        setCategories: (catigories) => {
            dispatch(setCategoriesAC(catigories))
        },
        setUrlAdress: (url) => {
            dispatch(setMainUrlAC(url))
        },
    }
}


let withRouteWayLine = withRouter(WayLineContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteWayLine);