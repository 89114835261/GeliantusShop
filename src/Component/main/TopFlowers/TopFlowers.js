import React from 'react';
import TF from './TopFlowers.module.css';
import TopDecors from '../TopDecors/TopDecors';

let TopFlowers = (props) => {
    return(
        <div className={TF.popular}>
        <h1>Популярные цветы</h1>

        <div className={TF.productsLits}>

            <a href="" className={TF.itemProduct}>
                <div className={TF.ProductCover}></div>
                <span>Лилия босновская</span>
            </a>
        

            
            <a href="" className={TF.itemProduct}>
                <div className={TF.ProductCover}></div>
                <span>Паранжея</span>
            </a>
      

        
            <a href="" className={TF.itemProduct}>
                <div className={TF.ProductCover}></div>
                <span>Керамическая черепашка</span>
            </a>
     

        
            <a href="" className={TF.itemProduct}>
                <div className={TF.ProductCover}></div>
                <span>Горшок японский</span>
            </a>
      

      
            <a href="" className={TF.itemProduct}>
                <div className={TF.ProductCover}></div>
                <span>Горшок</span>
            </a>

        </div>

    </div>
    );
}

export default TopFlowers;