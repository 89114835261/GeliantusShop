import React from 'react';
import P from './Product.module.css';
import { NavLink } from 'react-router-dom';
import {translitText} from './../redux/Project-reducer';

let Product = (props) => {
    let myFunc = () => {
        if(props.name) {
            return translitText(props.name, 'ru')
        } return ''
    }
            
    return(
        <NavLink to={props.url + '/Product/Product-' + myFunc() + '/' + props.id + '/Description'}>
            <div className={P.itemProduct}>
                <div className={P.wrapper}>
                    <div className={P.ProductCover}>
                        <img src={props.img[0].small} /></div>
                        <h5>{props.name}</h5> 
                        <div className={P.productInfo}>
                            <div className={P.info}><p>цена: {props.price}₽</p> <p>Заказов: {props.orders}</p> <p>raiting: {props.raiting}</p><p>id: {props.id}</p></div>
                            <div className={P.star}>
                                {props.raiting}
                            </div>
                        </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Product;