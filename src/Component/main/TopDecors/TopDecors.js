import React from 'react';
import TD from './TopDecors.module.css';

let TopDecors = (props) => {
    return(
        <div className={TD.popular}>
        <h1>Популярный декор</h1>

        <div className={TD.productsLits}>

            <a href="" className={TD.itemProduct}>
                <div className={TD.productCover}></div>
                <span>Лилия босновская</span>
            </a>
        

            
            <a href="" className={TD.itemProduct}>
                <div className={TD.productCover}></div>
                <span>Паранжея</span>
            </a>
      

        
            <a href="" className={TD.itemProduct}>
                <div className={TD.productCover}></div>
                <span>Керамическая черепашка</span>
            </a>
     

        
            <a href="" className={TD.itemProduct}>
                <div className={TD.productCover}></div>
                <span>Горшок японский</span>
            </a>
      

      
            <a href="" className={TD.itemProduct}>
                <div className={TD.productCover}></div>
                <span>Горшок</span>
            </a>

        </div>

    </div>
    );
}

export default TopDecors;