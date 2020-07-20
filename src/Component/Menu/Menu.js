import React from 'react';
import { connect } from 'react-redux';
import Button from './button/Button';
import { mutateStateActionCreator } from './../redux/Project-reducer';
import { changeIsOpenMenuAC } from './../redux/HeaderMenuReducer';
import style from './Menu.module.scss';

let Menu = (props) => {
    let arrMenu = props.menu ? props.menu.map(
        m => (m.catId !== 0 && m.main) && <Button key={m.catId} changeIsOpenMenu={props.changeIsOpenMenu} name={m.name} url={m.url} mutateStateFunc={props.mutateStateFunc} />
    ) : ' ';
    
    return(
        <div className={style.menu}><ul>{arrMenu}</ul></div>
    )
}

let mapStateToProps = (state) => {
    return {
        menu: state.HeaderMenu.menu
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        mutateStateFunc: () => {
            dispatch(mutateStateActionCreator())
        },
        changeIsOpenMenu: (booleanType = ' ') => {
            dispatch(changeIsOpenMenuAC(booleanType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Menu);