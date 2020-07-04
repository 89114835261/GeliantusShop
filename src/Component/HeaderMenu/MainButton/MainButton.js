import React from 'react';
import B from './MainButton.module.scss';
import { NavLink } from 'react-router-dom';

let mainButton = (props) => {
    let activeClicks = () => {

    }

    return(
            <NavLink className={B.headerLink} activeClassName={B.activeLink} to={props.url} onClick={() => activeClicks()}><span>{props.name}</span></NavLink>

    );
    
}

export default mainButton;