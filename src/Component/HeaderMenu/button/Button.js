import React from 'react';
import B from './Button.module.scss';
import { NavLink } from 'react-router-dom';

let Button = (props) => {
    let activeClick = () => {
        props.mutateStateFunc();
        props.changeIsOpenMenu(false);
       
    }
    return(
            <NavLink className={B.headerLink} activeClassName={B.activeLink} to={props.url} onClick={() => activeClick()}><span>{props.name}</span></NavLink>
    );
    
}

export default Button;