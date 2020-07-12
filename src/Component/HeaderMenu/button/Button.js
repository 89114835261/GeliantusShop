import React from 'react';
import B from './Button.module.scss';
import { NavLink } from 'react-router-dom';

let Button = (props) => {
    let activeClick = () => {
        props.mutateStateFunc();
        props.changeIsOpenMenu(false);
       
    }
    return(
        <li className={B.headerLink}><NavLink className={B.menuLink} activeClassName={B.activeLink} to={props.url} onClick={() => activeClick()}><span>{props.name}</span></NavLink></li>
    );
    
}

export default Button;