import React from 'react';
import style from './currentOffer.module.scss';

let CurrentOffer = (props) => {
    
    return(
        <div className={style.currentOffer}>
            <button onClick={() => props.scrollToImgBoxRight()}>sdsdsdsdsd</button>
            <div className={style.names}>{props.nameMap}</div>
            <div ref={props.catWrapper} className={style.catWrapper}>{props.catMap}</div>
            
        </div>
    )
}

export default CurrentOffer;