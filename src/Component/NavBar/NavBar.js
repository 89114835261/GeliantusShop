import React from 'react';
import N from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

let WayLine = (props) => {
    let setLinks = (arr) => {

        if(arr && props.mainUrl) {
            let changeUrl = (urlLabel) => {
                let rer = props.mainUrl.slice(0, props.mainUrl.indexOf(urlLabel) + urlLabel.length + 2)
                 return rer;
             }
            let visualElementsUrlArrZ = arr.map((s, i) => {
                if(s == 'Main') {
                    return;
                } else if(s == 'Products') {
                    return <NavLink className={N.navBar} to='/Main/Products'>Товары</NavLink>
                } else if(s == 'Category') {
                    return;
                } else if(s.slice(0, 9) == 'Category-') {
                return <NavLink className={N.navBar} to={changeUrl(s)}> > {props.translitText(s, 'en', 9)}</NavLink>
                } else if(s.slice(0, 8) == 'Product-') {
                    return <NavLink className={N.navBar} to={changeUrl(s) + '/Description'}> > {props.translitText(s, 'en', 8)}</NavLink>
                    }
                else return });
                return visualElementsUrlArrZ;
        } else return 'asda';
    }
    
    return( 
        <div><NavLink className={N.navBar} to="/Main">Главная</NavLink> > {setLinks(props.visualElementsUrlArr)}</div>
    );
}

export default WayLine;