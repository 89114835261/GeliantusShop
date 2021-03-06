import React from 'react';
import style from './itemProduct.module.scss';
import { NavLink } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Arrow } from './../Common/jsxExport';
import Raiting from '../Common/Raiting/Raiting';   

let ItemProduct = (props) => {
   const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' }, props.clickArrow, style);
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' }, props.clickArrow, style);
   
   let getAnswers = (id) => {
      props.getAnswers(id);
      console.log(id)
   }
   let openCartFunc = (product) => {
      props.addToCart(product)
      props.isOpenCartModal();
   }
   let visualSpecifications = props.itemProduct.specifications.map(v =>
   <div key={ v.name } className={style.specificationString}>{v.name} : {v.value}</div>
      );

   let mapPhoto =props.productCover && props.productCover.map( (item, i) => 
      <img key={'item' + i} alt={item.name} src={item.small} onClick={() => props.setIsOpenFullImage(item.small)}/>
   )


   console.log(props.productCover);
   let mapReviews = props.reviews.filter(item => item.productId === props.itemProduct.id);
   let visualReviews = mapReviews.length > 0 ? mapReviews.map(item =>
   <div key={item.id} className={style.reviewWrapper}>
      <div className={style.avatar} style={{backgroundImage: "url('https://cs6.pikabu.ru/avatars/332/v332269.jpg?1435819946')"}}></div>
      <div className={style.review}>
         <div>Пользователь <NavLink to={`/Profile/${item.userId}`}>{item.userName}</NavLink></div>
         <div>оценил данный товар на <b>{item.raitingProduct}</b></div>
         <div><p>Достоинства:</p> {item.goodQuality}</div>
         <div><p>Недостатки:</p> {item.badQuality}</div>
         <div><p>Комментарий:</p> {item.comment}<div className={style.likes}>Лайков: {item.likesReviews} | Дизлайков: {item.dislikesReviews ? item.dislikesReviews : '0'}</div></div>
         <button onClick={() => getAnswers(item.id, item.productId)}>Ответы</button>
            {props.answers && props.answers.map(answersItem => 
            {if(answersItem.reviewsId === item.id && answersItem.isVisible === true) {
            return   <div key={answersItem.id} className={style.answerBox}>
                        <div className={style.answerAvatar} style={{backgroundImage: `url(${answersItem.userAvatar})`}}></div>
                        <div className={style.answer}>
                           <NavLink to={`/Profile/${answersItem.userId}`} className={style.linkName}>{answersItem.userName}</NavLink>
                           <span>{answersItem.text}<div className={style.likes}>Лайков: {answersItem.likes} | Дизлайков: {answersItem.dislikes ? answersItem.dislikes : '0'}</div></span>
                        </div>
                        
                     </div>} })}
      </div>
   </div>) : null;

   let visualQestions = (props.questions && props.questions.length > 0) && props.questions.map(item =>
      <div key={item.id} className={style.question}><p>{item.userName}</p>{item.text}
      <div><p>Администратор</p>{item.answer && item.answer}</div>
      </div>
      );
   return (
      <div ref={props.myRef} className={style.wrapper}>
         {props.isOpenFullImage && <div className={style.fullImage}><div className={style.imgWrapper}><img src={props.fullPhoto} alt=''></img><button onClick={() => props.setIsOpenFullImage()}>Закрыть</button></div></div>}
         <div className={style.wrapperTopBox}>
            {console.log(props.myRefIMG)}
               
                  <div className={style.leftBoxWrapper}>
                  <span>{props.scrollPosition + '/' + props.itemProduct.photo.length}</span>
                     <div ref={props.myRefIMG} className={style.leftBox}>
                     <ScrollMenu 
                        ref={props.myRefImage}
                        translate={0}
                        transition={0.3}
                        selected={'item1'}
                        inertiaScrolling={true}
                        inertiaScrollingSlowdown={0.9}
                        alignCenter={false} 
                        wheel={false} 
                        dragging={false}
                        scrollBy={1} 
                        data={mapPhoto} 
                        arrowLeft={ArrowLeft} 
                        arrowRight={ArrowRight}
        />
                     </div>
                  </div>
              
               <div className={style.infoWrapper}>
                  <h1>{props.itemProduct.name} </h1>
                  <Raiting raitingSubmit={props.raitingSubmit}/>
                  <p>Рейтинг товара: {props.itemProduct.raiting} из 5</p>
                  <p>Голосов: {props.itemProduct.voices}</p>  
                     <button onClick={() => openCartFunc(props.itemProduct)}>Добавить в корзину</button>
                  </div>

         </div>   

         <div className={style.descriptionBox}>
               
               <div className={style.descriptionMenu}>
                  
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Description`} className={style.tabButton} activeClassName={style.active}>Описание</NavLink> 
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Specification`} className={style.tabButton} activeClassName={style.active}>Характеристики</NavLink>
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Reviews`} className={style.tabButton} activeClassName={style.active}>Отзывы</NavLink>
                  <NavLink to={`${props.url.slice(0, props.urlLong)}/Questions`} className={style.tabButton} activeClassName={style.active}>Вопрос-Ответ</NavLink>
               </div>

               <div className={style.navProductBox}>
                  <div className={style.leftDescriptionBox}>
                  {props.descriptionBoxSwitch == 'Description' ? <div><h2>{props.itemProduct.name}</h2>{props.itemProduct.description}</div> : null} 
                  {props.descriptionBoxSwitch == 'Specification' ? <div><h2>Характеристики</h2>{visualSpecifications}</div> : null}
                  {props.descriptionBoxSwitch == 'Reviews' ? <div><h2>Отзывы о товаре</h2>{visualReviews ? visualReviews : <>У данного товара пока нет отзывов. {<NavLink to onClick={() => props.isOpenRegistrationModal()}>Станьте первым!</NavLink>}</>}</div> : null}
                  {props.descriptionBoxSwitch == 'Questions' ? <div><h2>Вопрос - ответ</h2>{visualQestions ? visualQestions : <>Пока по данному товару вопросов не было. {<NavLink to onClick={() => props.isOpenRegistrationModal()}>Станьте первым!</NavLink>}</>}</div> : null}
                  </div>
                  <div className={style.survey}>
                     <p>Сделаем сайт лучше!</p>
                     <span>Пожалуйста, ответьте на несколько вопросов.<br></br> Это займёт не более минуты.</span>
                     <button>Пройти опрос</button>
                  </div>
               </div>
               <div className={style.bugReport}>Нашли ошибку в описании? <NavLink to='' className={style.reportLink}>Сообщите нам!</NavLink></div>
         </div>
      </div>
      
   );
 
}


export default ItemProduct;