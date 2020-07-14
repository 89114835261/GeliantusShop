import React from 'react';
import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';


let NavBar = (props) => {
    return( 
        //Ссылка 'Каталог' выводится только если начало mainUrl(текущего url) Не начинается с самого талога
        //Что бы не было Каталог > Каталог, выводится если ссылка начинается с /Kategoriya или /Product
        <div className={style.NavBox}>
            <NavLink className={style.navBar} to="/Main">Главная</NavLink>
             {props.setLinks(props.visualElementsUrlArr)}
        </div>
    );
}

export default NavBar;