import React from 'react';
import style from './Button.module.scss';
import { NavLink } from 'react-router-dom';

let Button = (props) => {
    let activeClick = () => {
        props.mutateStateFunc();
        props.changeIsOpenMenu(false);
       
    }
    return(
        <li className={style.headerLink}><NavLink className={style.menuLink} activeClassName={style.activeLink} to={props.url} onClick={() => props.bodyLocation ? ' ' : activeClick()}><span>{props.name}</span></NavLink></li>
    );
    
}

export default Button;