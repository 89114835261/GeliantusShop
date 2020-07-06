import React from 'react';
import style from './Button.module.scss';

const Button = (props) => {
    return(
        <button className={style.mainButton} onClick={(param) => props.propsFunc(param)}>{props.buttonText}</button>
    )
}

export default Button;