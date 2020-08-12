import React from 'react';
import style from './Button.module.scss';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return(
        <div className={style.button} style={{textAlign: `${props.alignCenter && 'center'}`, marginTop: props.marginTop}}>
        <NavLink to={props.url}>{props.title}</NavLink>
        </div>
    )
}

export default Button;