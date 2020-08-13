import React from 'react';
import style from './currentOffer.module.scss';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import CategoryCard from './../CategoryCard/CategoryCard';

let CurrentOffer = (props) => {
    const Arrow = ({ text, className }) => {
        return <div className={style[className]}>{text}</div>;
      };
    
    const Menu = (list) =>
    list.map((item, i) => {
      return <CategoryCard 
      text={item.name}
      nameLink={'name' + item.catId} 
      key={i} 
      minPrice={item.minPrice} 
      additionalClass={true} 
      url={item.url} 
      name={item.name} 
      cover={item.cover}/>
    });
    
   
    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    let menu = props.cateforyOffers ?  Menu(props.cateforyOffers[props.currentArr]) : ''
    return(
        <div className={style.wrapper}>
            <h2>{props.currentOffersTitle && props.currentOffersTitle}</h2>
            <div className={style.currentOffer}>
                
                <div className={style.names}>{props.nameMap}</div>
                <div ref={props.catWrapper} className={style.catWrapper}></div>
                <ScrollMenu 
                ref={props.myRef}
                translate={0}
                inertiaScrolling={true}
                inertiaScrollingSlowdown={0,25}
                alignCenter={false} 
                wheel={false} 
                dragging={false }
                scrollToSelected='item3' 
                scrollBy={1} 
                data={menu} 
                arrowLeft={ArrowLeft} 
                arrowRight={ArrowRight}/>
            </div>
        </div>
    )
}

export default CurrentOffer;