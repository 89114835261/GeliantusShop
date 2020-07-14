import React from 'react';
import style from './currentOffer.module.scss';

let CurrentOffer = (props) => {
    
    return(
        <div className={style.currentOffer}>
            <div className={style.names}>{props.nameMap}</div>
        </div>
    )
}

export default CurrentOffer;