import React from 'react';
import style from './CategoryCard.module.scss';
import { NavLink } from 'react-router-dom';

let CategoryCard = (props) => {
    return(
        <NavLink className={style.card + ` ${props.additionalClass ? style._additionalClass : ''}`} to={props.url}>
            <img src={props.cover} />
            <p>{props.name}</p>
            {props.minPrice && <p>{props.minPrice}</p>}
        </NavLink>
    )
}

export default CategoryCard;