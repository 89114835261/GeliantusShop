import React from 'react';
import N from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

let WayLine = (props) => {
    let setLinks = (arr) => {
        if(arr) {
            let visualElementsUrlArrZ = arr.map((s, i) => {
                if(s == 'Main') {
                    return;
                } else if(s == 'Products') {
                    return <NavLink className={N.navBar} to='/Main/Products'>Товары > </NavLink>
                } else if(s == 'Category') {
                    return;
                } else if(s.slice(0, 9) == 'Category-') {
                     return <NavLink className={N.navBar} to='/Main/Products'>{props.translitText(s, 'en')}</NavLink>
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