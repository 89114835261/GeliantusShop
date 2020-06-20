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
                  <img src={props.productCover}></img>
                  
               </div>

               <div className={i.changePhoto}>
                  <img src={props.itemProduct.photo[0].small} onClick={(e) => props.setProductCover(props.itemProduct.photo[0].small)} />
                  {props.itemProduct.photo[1] && <img src={props.itemProduct.photo[1].small} onClick={(e) => props.setProductCover(props.itemProduct.photo[1].small)} /> }
                  {props.itemProduct.photo[2] && <img src={props.itemProduct.photo[2].small} onClick={(e) => props.setProductCover(props.itemProduct.photo[2].small)} /> }
               </div>
               
               <div className={i.infoWrapper}>
                  <h2>{props.itemProduct.name} ID: {props.itemProduct.id} </h2>
                  <img src={raiting} style={{width: '200px', marginTop: '10px', padding: '0'}}></img>
                  <p>Рейтинг товара: {props.itemProduct.raiting} из 5</p>
                  <p>Голосов: {props.itemProduct.voices}</p>  
                  <button>Заказать</button>
               </div>

         </div>   

         <div className={i.descriptionBox}>
               
               <div className={i.descriptionMenu}>
                  
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Description`} className={i.tabButton} activeClassName={i.active}>Описание</NavLink> 
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Specification`} className={i.tabButton} activeClassName={i.active}>Характеристики</NavLink>
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Reviews`} className={i.tabButton} activeClassName={i.active}>Отзывы</NavLink>
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Questions`} className={i.tabButton} activeClassName={i.active}>Вопрос-Ответ</NavLink>
               </div>

               <div className={i.descriptionBox}>
                  {props.descriptionBoxSwitch == 'Description' ? props.itemProduct.description : null} 
                  {props.descriptionBoxSwitch == 'Specification' ? visualSpecifications : null}
               </div>
         </div>

      </div>
   );
}


export default ItemProduct;