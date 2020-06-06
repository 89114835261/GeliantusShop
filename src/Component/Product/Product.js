import React from 'react';
import P from './Product.module.css';
import { NavLink } from 'react-router-dom';

let Product = (props) => {
    return(
        <NavLink to={'/Product/' + props.id + '/Description'}>
            <div className={P.itemProduct}>
                <div className={P.ProductCover}>
                    <img src={'this.props.products[0].url'} /></div>
                    <span>{props.name}</span>цена{props.price}, Заказов:{props.orders}, id: {props.id}
            </div>
        </NavLink>
    );
}

export default Product;