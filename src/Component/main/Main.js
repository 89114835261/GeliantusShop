import React from 'react';
import TopProductsContainer from '../TopProducts/TopProductsContainer';
import { connect } from 'react-redux';
import {setMainLongUrlAC} from './../redux/Main-reducer';
import { withRouter } from 'react-router-dom';
import { changeIsOpenMenuAC } from './../redux/HeaderMenuReducer';
import Button from '../HeaderMenu/button/Button';
import style from './Main.module.scss';

let Main = (props) => {
    if(props.longUrlMain === null ) {
    props.setUrlLong(props.location.pathname.length)
    }
    let arrMenu = props.menu ? props.menu.map(
        m => m.catId != 0 && <Button key={m.catId} changeIsOpenMenu={props.changeIsOpenMenu} name={m.name} url={m.url} mutateStateFunc={props.mutateStateFunc} />
    ) : ' ';
    return(
        <div className={style.wrapper}>
            <div className={style.contentBox}>
            <TopProductsContainer itemUrl={props.location.pathname.slice(5, props.longUrlMain)}/>
            </div>

            <div className={style.rightSide}>
            <ul>{arrMenu}</ul>
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
        }
    }
}

let withRouteMain = withRouter(Main)
export default connect(mapStateToProps, mapDispatchToProps) (withRouteMain);
