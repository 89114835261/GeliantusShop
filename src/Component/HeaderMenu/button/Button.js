import React from 'react';
import B from './Button.module.css';
import { NavLink } from 'react-router-dom';

let Button = (props) => {
    let activeClick = () => {
        props.changeIsOpenMenu(false);
        props.mutateStateFunc();
    }
    return(
        <NavLink className={B.headerLink} activeClassName={B.activeLink} to={props.url} onClick={() => activeClick()}><span>{props.name}</span></NavLink>
    );
    
}

export default Button;