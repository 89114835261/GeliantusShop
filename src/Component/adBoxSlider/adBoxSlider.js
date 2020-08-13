import React from 'react';
import style from './adBoxSlider.module.scss'
import ScrollMenu from 'react-horizontal-scrolling-menu';

const AdBoxSlider = (props) => {
    const Arrow = ({ text, className }) => {
        return <div onClick={() => props.clickArrow(text)} className={style[className]}>{text}</div>;
      };

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    const dataMenu = props.adBanners(props.adImages, style.bon)
    const adCurrentChange = props.adCurrentChange(props.adImages, style.activeBTN)
    return(
        <div className={style.wrapper}>
              <div className={style.currentChange}>
                {adCurrentChange}
            </div>
        <ScrollMenu 
                ref={props.myRefAd}
                translate={0}
                transition={0.3}
                selected={'item1'}
                inertiaScrolling={true}
                inertiaScrollingSlowdown={0.9}
                alignCenter={false} 
                wheel={false} 
                dragging={false}
                scrollBy={1} 
                data={dataMenu} 
                arrowLeft={ArrowLeft} 
                arrowRight={ArrowRight}
        />
          
        </div>
    )
}

export default AdBoxSlider;