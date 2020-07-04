import React from 'react';
import N from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';


let WayLine = (props) => {
    let setLinks = (arr) => {

        if(arr && props.mainUrl && props.catigories) {
            let changeUrl = (urlLabel) => { //фиксирует текущий URL и вовращает его
               
                let ourURL = props.mainUrl.slice(0, props.mainUrl.indexOf(urlLabel) + urlLabel.length + 1)
                if(props.mainUrl.includes('/', ourURL.length)) {
                    let countURL = props.mainUrl.indexOf('/', ourURL.length);
                    let finalURL = props.mainUrl.slice(0, countURL)
                    return finalURL;
                } else {
                    let sliceNumber = props.mainUrl.slice(ourURL.length);
                    let finalURL = props.mainUrl.slice(0, ourURL.length + sliceNumber.length);
                    return finalURL;
                }
             }
            //  {props.translitText(s, 'en', 9)}
            let visualElementsUrlArrZ = arr.map((s, i) => {
                if(s == 'Main') {
                    return;
                } else if(s == 'Products') {
                    return <NavLink className={N.navBar} to='/Main/Products'>Товары</NavLink>
                } else if(s == 'Category') {
                    return;
                } else if(s.slice(0, 11) == 'Kategoriya-') {
                return <div >{s.slice(11,19) != 'Katalog' && <>&nbsp;>&nbsp;</>}<NavLink className={N.navBar} to={changeUrl(s)}>
               {props.catigories[changeUrl(s).slice(-1)].name}
                </NavLink></div>
                } else if(s.slice(0, 8) == 'Product-') {
                    return <NavLink className={N.navBar} to={changeUrl(s) + '/Description'}><>&nbsp;>&nbsp;</>{props.product && props.product[0].name}</NavLink>
                } else if(s == Number) {
                    return;
                } else return });
                return visualElementsUrlArrZ;
        } else return 'Ошибка';
    }
    
    return( 
        //Ссылка 'Каталог' выводится только если начало mainUrl(текущего url) Не начинается с самого талога
        //Что бы не было Каталог > Каталог, выводится если ссылка начинается с /Kategoriya или /Product
        <div className={N.NavBox}><NavLink className={N.navBar} to="/Main">Главная</NavLink>&nbsp;&mdash;&nbsp;{(props.mainUrl && props.mainUrl.slice(0, 11) == '/Kategoriya' && props.mainUrl.slice(12, 19) != 'Katalog' || (props.mainUrl && props.mainUrl.slice(0, 8) == '/Product')) && <NavLink className={N.navBar} to="/Kategoriya-Katalog/0" onClick={() => props.mutateStateFunc()}>Каталог</NavLink>}&nbsp;{setLinks(props.visualElementsUrlArr)}</div>
    );
}

export default WayLine;