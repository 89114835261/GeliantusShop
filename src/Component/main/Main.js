import React from 'react';
import M from './Main.module.css';
import TopProductsContainer from './TopProducrs/TopProductsContainer';
import TopFlowers from './TopFlowers/TopFlowers';
import TopDecors from './TopDecors/TopDecors';

let Main = (props) => {
    return(
        <div>
        <TopProductsContainer />
        <TopFlowers />
        <TopDecors />
        </div>
    );
}

export default Main;