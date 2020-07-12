import React from 'react';
import P from './Product.module.scss';
import { NavLink } from 'react-router-dom';
import {translitText} from './../redux/Project-reducer';

let Product = (props) => {
    let myFunc = () => {
        if(props.name) {
            return translitText(props.name, 'ru')
        } return ''
    }
            
    let defaultIMG = 'https://image.flaticon.com/icons/svg/1269/1269266.svg';

    return(
        <NavLink to={props.url + '/Product/Product-' + myFunc() + '/' + props.id + '/Description'} title={props.name}>
            <div className={P.itemProduct + ` ${props.additionalClass ? P._additionalClass : ''}`}>
                <div className={P.wrapper + ` ${props.additionalClass ? P._additionalClass : ''}`}>
                    <div className={P.ProductCover + ` ${props.additionalClass ? P._additionalClass : ''}`}>
                        <img src={!props.img[0].small ? defaultIMG : props.img[0].small} /></div>
                        <h5>{props.name}</h5> 
                        {!props.isHiddenInfo ?
                        <div className={P.productInfo}>
                            <div className={P.info}><p>цена: {props.price}₽</p> <p>Заказов: {props.orders}</p> <p>raiting: {props.raiting}</p><p>id: {props.id}</p></div>
                            <div className={P.star}>
                                {props.raiting}
                            </div>
                        </div>
                        : <span className={P.price}>цена: {props.price}₽</span>}
                </div>
            </div>
        </NavLink>
    );
}

export default Product;