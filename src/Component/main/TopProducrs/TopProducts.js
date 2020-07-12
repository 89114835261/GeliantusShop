import React from 'react';
import style from './TopProducts.module.scss';
import Product from '../../Product/Product';
import { quickSort } from '../../redux/Project-reducer';

let TopProducts = (props) => {

    let sortProducts = props.TopProductsList ? quickSort(props.TopProductsList, 'id') : null; // алерт?
    let endArrProducts = sortProducts && sortProducts.slice(0, props.countProducts);
    let endProductList = endArrProducts && endArrProducts.map( s =>
        <Product key={s.id}
            name={s.name}
            mainCategory={s.mainCategory}
            url={props.itemUrl}
            price={s.price}
            raiting={s.raiting}
            img={s.photo}
            orders={s.orders}
            id={s.id}
            additionalClass={true}
            isHiddenInfo={true}
        />
    );
    return(
        <div className={style.popular}>
            <h1>
                {props.boxNameOne && props.boxNameOne}
                {props.boxNameTwo && props.boxNameTwo}
                {props.boxNameThree && props.boxNameThree}
            </h1>
            <div className={style.productsLits}>
                {endProductList}
            </div>
        </div>
    );
}

export default TopProducts;