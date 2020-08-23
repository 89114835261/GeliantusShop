import React from 'react';
import TopProductsContainer from '../TopProducts/TopProductsContainer';
import { connect } from 'react-redux';
import {setMainLongUrlAC} from './../redux/Main-reducer';
import { withRouter } from 'react-router-dom';
import { changeIsOpenMenuAC } from './../redux/HeaderMenuReducer';
import style from './Main.module.scss';
import { mutateStateActionCreator } from './../redux/Project-reducer';
import Menu from '../Menu/Menu';
import CurrentOfferContainer from '../currentOffer/currentOfferContainer';
import SaleContainer from '../Sale/SaleContainer';
import AdBoxSliderContainer from '../adBoxSlider/adBoxSliderContainer';
import AdBannerContainer from '../ImageFolder/adBannerContainer';

let Main = (props) => {
    if(props.longUrlMain === null ) {
    props.setUrlLong(props.location.pathname.length)
    }
    return(
        <div className={style.wrapper}>
            <div className={style.contentBox}>
            <div>
                <SaleContainer />
                <AdBoxSliderContainer />
            </div>
            
            <CurrentOfferContainer />
            <AdBannerContainer />
            <TopProductsContainer itemUrl={props.location.pathname.slice(5, props.longUrlMain)}/>
            </div>
           
            <div className={style.rightSide}>
                <Menu />
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        longUrlMain: state.Main.longUrlMain,
        menu: state.HeaderMenu.menu,
        mutateState: state.Project.mutateState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUrlLong: (long) => {
            dispatch(setMainLongUrlAC(long))
        },
        changeIsOpenMenu: (booleanType = ' ') => {
            dispatch(changeIsOpenMenuAC(booleanType))
        },
        mutateStateFunc: () => {
            dispatch(mutateStateActionCreator())
        }
    }
}

let withRouteMain = withRouter(Main)
export default connect(mapStateToProps, mapDispatchToProps) (withRouteMain);
