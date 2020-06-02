import React from 'react';
import M from './Main.module.css';
import TopProducts from './TopProducrs/TopProducts';
import TopFlowers from './TopFlowers/TopFlowers';
import TopDecors from './TopDecors/TopDecors';

let Main = (props) => {
    return(
        <div>
        <TopProducts />
        <TopFlowers />
        <TopDecors />
        </div>
    );
}

export default Main;