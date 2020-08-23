import React, {useState} from 'react';
import style from './Raiting.module.scss';

const Raiting = (props) => {
    const [ estimation, setEstimation ] = useState(0);
    const changeEstimation = (estimationParam) => {
        setEstimation(estimationParam);
        props.raitingSubmit(estimationParam);
        console.log(estimationParam)
    }
    const array = [5,4,3,2,1];
    const stars = array.map(item => 
        <span key={item} className={(item <= estimation) && style.active} onClick={() => changeEstimation(item)}></span>
    )
    return(
        <div className={style.wrapper}>
            <div className={style.active}></div>
            <div className={style.raiting}>
                {stars}
            </div>
        </div>
    )
}

export default Raiting;