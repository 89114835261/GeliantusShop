import React from 'react';
import style from './currentOffer.module.scss';

let CurrentOffer = (props) => {
    
    return(
        <div className={style.wrapper}>
            <h2>Актуальные предложения</h2>
            <div className={style.currentOffer}>
                <button onClick={() => props.scrollOfferBox('back')}>Назад</button>
                <button onClick={() => props.scrollOfferBox('next')}>Вперед</button>
                <div className={style.names}>{props.nameMap}</div>
                <div ref={props.catWrapper} className={style.catWrapper}>{props.catMap}</div>
            </div>
        </div>
    )
}

export default CurrentOffer;