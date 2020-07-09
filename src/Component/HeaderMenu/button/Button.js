import React from 'react';
import B from './Button.module.scss';
import { NavLink } from 'react-router-dom';

let Button = (props) => {
    let activeClick = () => {
        props.mutateStateFunc();
        props.changeIsOpenMenu(false);
       
    }
    return(
            <NavLink activeClassName={B.activeLink} to={props.url} onClick={() => activeClick()}><li className={B.headerLink}><span>{props.name}</span></li></NavLink>
    );
    
}

export default Button;