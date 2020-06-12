import React from 'react';
import B from './Button.module.css';
import { NavLink } from 'react-router-dom';

let Button = (props) => {
    return(
        <NavLink to={props.url} onClick={() =>props.wayLinkFunc(props.url, props.name)}><span>{props.name}</span></NavLink>
    );
    
}

export default Button;