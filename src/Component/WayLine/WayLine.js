import React from 'react';
import w from './WayLine.module.css';
import { NavLink } from 'react-router-dom';

let WayLine = (props) => {

    return(
        <div><NavLink to="/Main/1">Главная</NavLink> > {props.wayLinks[0].name}</div>
    );
}

export default WayLine;