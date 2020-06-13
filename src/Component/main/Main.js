import React from 'react';
import M from './Main.module.css';
import TopProductsContainer from './TopProducrs/TopProductsContainer';
import TopFlowers from './TopFlowers/TopFlowers';
import TopDecors from './TopDecors/TopDecors';
import { connect } from 'react-redux';
import {setMainLongUrlAC} from './../redux/Main-reducer';
import { withRouter } from 'react-router-dom';

let Main = (props) => {
    if(props.longUrlMain === null ) {
    props.setUrlLong(props.location.pathname.length)
    }
    return(
        <div>
        <TopProductsContainer itemUrl={props.location.pathname.slice(0, props.longUrlMain)}/>
        <TopFlowers itemUrl={props.location.pathname.slice(0, props.longUrlMain)}/>
        <TopDecors itemUrl={props.location.pathname.slice(0, props.longUrlMain)}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        longUrlMain: state.Main.longUrlMain
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUrlLong: (long) => {
            dispatch(setMainLongUrlAC(long))
        }
    }
}

let withRouteMain = withRouter(Main)
export default connect(mapStateToProps, mapDispatchToProps) (withRouteMain);
