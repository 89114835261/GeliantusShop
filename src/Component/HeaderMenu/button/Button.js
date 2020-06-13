import React from 'react';
import B from './Button.module.css';
import { NavLink } from 'react-router-dom';

let Button = (props) => {

    return(
        <NavLink className={B.headerLink} activeClassName={B.activeLink} to={props.url} onClick={() => props.mutateStateFunc()}><span>{props.name}</span></NavLink>
    );
    
}

export default Button;