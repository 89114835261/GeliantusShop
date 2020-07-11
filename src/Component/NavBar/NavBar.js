import React from 'react';
import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';


let NavBar = (props) => {
    return( 
        //Ссылка 'Каталог' выводится только если начало mainUrl(текущего url) Не начинается с самого талога
        //Что бы не было Каталог > Каталог, выводится если ссылка начинается с /Kategoriya или /Product
        <div className={style.NavBox}>
            <NavLink className={style.navBar} to="/Main">Главная</NavLink>
            {(props.mainUrl && props.mainUrl.slice(0, 11) == '/Kategoriya'
             && props.mainUrl.slice(12, 19) != 'Katalog' 
             || (props.mainUrl && props.mainUrl.slice(0, 8) == '/Product')) 
             && <NavLink className={style.navBar} to="/Kategoriya-Katalog/0" onClick={() => props.mutateStateFunc()}>Каталог</NavLink>}
             {props.setLinks(props.visualElementsUrlArr)}
        </div>
    );
}

export default NavBar;