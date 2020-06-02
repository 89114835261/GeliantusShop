import React from 'react';
import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import {SetMenuActionCreator} from '../redux/HeaderMenuReducer';

let mapStateToProps = (state) => {
    return {
        menu: state.HeaderMenu.menu
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        menuSet :(menu) => {
            dispatch(SetMenuActionCreator(menu))
        }
    }
}

let HeaderMenuContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderMenu);

export default HeaderMenuContainer;