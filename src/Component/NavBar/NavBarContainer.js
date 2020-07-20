import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import style from './NavBar.module.scss';
import { withRouter, NavLink } from 'react-router-dom';
import {setUrlElementsAC, setCategoriesAC} from './../redux/NavBar-reducer';
import {setMainUrlAC, translitText, mutateStateActionCreator} from './../redux/Project-reducer';
import Axios from 'axios';

class NavBarContainer extends React.Component {
    componentWillMount() {
        this.props.setUrlElements(this.props.location.pathname.split('/'));
    }
    componentDidMount() {
        Axios.get('/Categories.json').then(response => {this.props.setCategories(response.data)});
    }
  
    componentDidUpdate() {
        if(this.props.mainUrl !== this.props.location.pathname) {
            this.props.setUrlAdress(this.props.location.pathname);
            this.componentWillMount();
        }
    }

    render() {
        let setLinks = (arr) => {
            if(arr && this.props.mainUrl && this.props.catigories) {
                let changeUrl = (urlLabel) => { //фиксирует текущий URL и вовращает его
                    let ourURL = this.props.mainUrl.slice(0, this.props.mainUrl.indexOf(urlLabel) + urlLabel.length + 1)
                    if(this.props.mainUrl.includes('/', ourURL.length)) {
                        let countURL = this.props.mainUrl.indexOf('/', ourURL.length);
                        let finalURL = this.props.mainUrl.slice(0, countURL)
                        return finalURL;
                    } else {
                        let sliceNumber = this.props.mainUrl.slice(ourURL.length);
                        let finalURL = this.props.mainUrl.slice(0, ourURL.length + sliceNumber.length);
                        return finalURL;
                    }
                 }
                //  {props.translitText(s, 'en', 9)}
                let visualElementsUrlArrZ = arr.map((s, i) => {
                    if(s == 'Main') {
                        return;
                    } else if(s === 'Products') {
                        return <NavLink className={style.navBar} to='/Main/Products'>Товары</NavLink>
                    } else if(s === 'Category') {
                        return;
                    } else if(s.slice(0, 11) === 'Kategoriya-') {
                    return <div ><NavLink className={style.navBar} to={changeUrl(s)}>
                    {this.props.catigories[changeUrl(s).slice(-(changeUrl(s).length - (changeUrl(s).lastIndexOf('/') + 1)))].name}
                    </NavLink></div>
                    } else if(s.slice(0, 8) === 'Product-') {
                        return <NavLink className={style.navBar} to={changeUrl(s) + '/Description'}>{this.props.product && this.props.product[0].name}</NavLink>
                    } else if(s === Number) {
                        return;
                    } else return });
                    return visualElementsUrlArrZ;
            } else return 'Ошибка';
        }
        return(
            <NavBar setLinks={setLinks} mutateStateFunc={this.props.mutateStateFunc} catigories={this.props.catigories} itemCategory={this.props.itemCategory} product={this.props.product} translitText={translitText} mainUrl={this.props.mainUrl} visualElementsUrlArr={this.props.urlElements}/>
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
        mutateStateFunc: () => {
            dispatch(mutateStateActionCreator())
        }, 
    }
}


let withRouteNavBar = withRouter(NavBarContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteNavBar);