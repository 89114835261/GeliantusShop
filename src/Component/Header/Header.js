import React from 'react';
import H from './Header.module.css';

let Header = (props) => {
    return(
        <div className={H.header} >
            <div className={H.infoBlock}>
                <p>&#9742; 8-800-239-42-52 | г.Калининград ул.Пролетарская 28 | с 10:00 до 18:00 | сб,вс - выходной</p>
            </div>        
        </div>
    );
}

export default Header;