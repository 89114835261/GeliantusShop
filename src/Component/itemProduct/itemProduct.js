import React from 'react';
import i from './itemProduct.module.css';
import raiting from './../../img/raiting.png';
import { NavLink } from 'react-router-dom';

let ItemProduct = (props) => {

   let visualSpecifications = props.Specification.map(v =>
   <div>{v.name} : {v.value}</div>
      );
      
   return (
      <div className={i.wrapper}>

         <div className={i.wrapperTopBox}>
         
               <div className={i.leftBox}>
                  <img src="/sd"></img>
               </div>

               <div className={i.changePhoto}>
                  <img src="/sd"></img>
                  <img src="/sd"></img>
                  <img src="/sd"></img>
               </div>

               <div className={i.infoWrapper}>
                  <h2>{props.name} ID: {props.id} </h2>
                  <img src={raiting} style={{width: '200px', marginTop: '10px', padding: '0'}}></img>
                  <p>Рейтинг товара: {props.raiting} из 5</p>
                  <p>Голосов: {props.voices}</p>  
                  <button>Заказать</button>
               </div>

         </div>   

         <div className={i.descriptionBox}>
               
               <div className={i.descriptionMenu}>
                  
                  <NavLink to={`/Product/${props.id}/Description`}><p className={i.active}>Описание</p></NavLink> 
                  <NavLink to={`/Product/${props.id}/Specification`}><p>Характеристики</p></NavLink>
                  <NavLink to={`/Product/${props.id}/Reviews`} ><p>Отзывы</p></NavLink>
                  <NavLink to={`/Product/${props.id}/Questions`} ><p>Вопрос-Ответ</p></NavLink>
               </div>

               <div className={i.descriptionBox}>
                  {props.descriptionBoxSwitch == 'Description' ? props.description : null} 
                  {props.descriptionBoxSwitch == 'Specification' ? visualSpecifications : null}
               </div>
         </div>

      </div>
   );
}

export default ItemProduct;