import React from 'react';
import style from './adBoxSlider.module.scss'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Arrow } from './../Common/jsxExport';

const AdBoxSlider = (props) => {

    const changeAdFunc = (param) => {
        props.changeAdFunc(param)
    }

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' }, props.clickArrow, style);
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' }, props.clickArrow, style);
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