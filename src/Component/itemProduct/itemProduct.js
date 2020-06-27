import React from 'react';
import i from './itemProduct.module.css';
import raiting from './../../img/raiting.png';
import { NavLink } from 'react-router-dom';

let ItemProduct = (props) => {
   let getAnswers = (id) => {
      props.getAnswers(id);

      console.log(id)
   }
   let visualSpecifications = props.itemProduct.specifications.map(v =>
   <div key={ v.name } className={i.specificationString}>{v.name} : {v.value}</div>
      );
   let visualAnswers = props.answers.map(item => <div key={item.id}>
      <p><NavLink to={`/Profile/${item.id}`}>{item.userName}</NavLink></p>
      <span>{item.text}</span>
  </div>);
  
   let visualReviews = props.reviews.map(item => 
   <div key={item.id}>
      <div>Пользователь <NavLink to={`/Profile/${item.userId}`}>{item.userName}</NavLink></div>
      <div>оценил данный товар на <b>{item.raiting}</b></div>
      <div>Достоинства: {item.goodQuality}</div>
      <div>Недостатки: {item.badQuality}</div>
      <div>Комментарий: {item.comment}</div>
      <button onClick={() => getAnswers(item.id, item.productId)}>Ответы</button>
         {props.answers.map(answersItem => 
         {if(answersItem.reviewsId == item.id && answersItem.isVisible === true) {
         return <div key={answersItem.id}>
         {answersItem.name}
         {answersItem.text}
      </div>} else return})}
   </div>)
   return (
      <div className={i.wrapper}>
         {props.isOpenFullImage && <div className={i.fullImage}><div className={i.imgWrapper}><img src={props.productCover}></img><button onClick={() => props.setIsOpenFullImage()}>Закрыть</button></div></div>}
         <div className={i.wrapperTopBox}>
         
               <div className={i.leftBox}>
                  <img src={props.productCover} onClick={() => props.setIsOpenFullImage()}></img>
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

               <div className={i.navProductBox}>
                  <div className={i.leftDescriptionBox}>
                  {props.descriptionBoxSwitch == 'Description' ? <div><h2>{props.itemProduct.name}</h2>{props.itemProduct.description}</div> : null} 
                  {props.descriptionBoxSwitch == 'Specification' ? <div><h2>Характеристики</h2>{visualSpecifications}</div> : null}
                  {props.descriptionBoxSwitch == 'Reviews' ? <div><h2>Отзывы о товаре</h2>{visualReviews}}</div> : null}
                  {props.descriptionBoxSwitch == 'Questions' ? <div><h2>Вопрос - ответ</h2></div> : null}
                  </div>
                  <div className={i.survey}>
                     <p>Сделаем сайт лучше!</p>
                     <span>Пожалуйста, ответьте на несколько вопросов.<br></br> Это займёт не более минуты.</span>
                     <button>Пройти опрос</button>
                  </div>
               </div>
               <div className={i.bugReport}>Нашли ошибку в описании? <NavLink to='' className={i.reportLink}>Сообщите нам!</NavLink></div>
         </div>

      </div>
   );
}


export default ItemProduct;