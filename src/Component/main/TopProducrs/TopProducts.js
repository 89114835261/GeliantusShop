import React from 'react';
import TP from './TopProducts.module.css';

let TopProducts = (props) => {
    return(
        <div className={TP.popular}>
        <h1>Популярные товары</h1>

        <div className={TP.productsLits}>

            <a href="" className={TP.itemProduct}>
                <div className={TP.ProductCover}></div>
                <span>Лилия босновская</span>
            </a>
        

            
            <a href="" className={TP.itemProduct}>
                <div className={TP.ProductCover}></div>
                <span>Паранжея</span>
            </a>
      

        
            <a href="" className={TP.itemProduct}>
                <div className={TP.ProductCover}></div>
                <span>Керамическая черепашка</span>
            </a>
     

        
            <a href="" className={TP.itemProduct}>
                <div className={TP.ProductCover}></div>
                <span>Горшок японский</span>
            </a>
      

      
            <a href="" className={TP.itemProduct}>
                <div className={TP.ProductCover}></div>
                <span>Горшок</span>
            </a>

        </div>

    </div>
    );
}

export default TopProducts;