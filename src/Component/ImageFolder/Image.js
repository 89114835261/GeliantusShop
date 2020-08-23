import React from 'react';
import style from './image.module.scss';
import { NavLink } from 'react-router-dom';

const Image = (props) => {
    return(
        <NavLink to='#' ><img src={props.image} className={style.image} /></NavLink>
    )
}

export default Image