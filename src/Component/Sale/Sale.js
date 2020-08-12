import React from 'react';
import style from './Sale.module.scss';
import Button from '../Common/Button/Button';
import { NavLink } from 'react-router-dom';

const Sale = (props) => {
    return (
        <div className={style.sale}>
            <h3>Скидки</h3>
            <ul>
                <li><NavLink to='#'>Товары со скидкой 23</NavLink></li>
                <li><NavLink to='#'>Комплектом дешевле 7</NavLink></li>
                <li><NavLink to='#'>Уценённые товары 25</NavLink></li>
            </ul>
            <div className={style.button}>
            <Button 
             marginTop={25} 
             alignCenter={true}  
             url='#' 
             title='Все акции'/>
             </div>
        </div>
    )
}

export default Sale;