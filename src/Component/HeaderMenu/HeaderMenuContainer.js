import React from 'react';
import { connect } from 'react-redux';
import {SetMenuActionCreator, changeIsOpenMenuAC, isOpenCartModalAC, SetMainMenuActionCreator, isOpenRegistrationModalAC} from '../redux/HeaderMenuReducer';
import {wayLinkActionCreator, mutateStateActionCreator} from './../redux/Project-reducer';
import style from './HeaderMenu.module.scss';
import MainButton from './MainButton/MainButton';
import { NavLink, withRouter } from 'react-router-dom';
import Axios from 'axios';
import Menu from '../Menu/Menu';

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let buttonList = [ // Получаем созданные кнопки
            {name: 'Главная', url: '/Main'}
        ]
        this.props.setMainMenu(buttonList);
        Axios.get('/Categories.json').then(response => this.props.menuSetCategories(response.data));
    }

    render() {
        if(this.props.mainMenu && this.props.menu) {
            let setMainMenu = this.props.mainMenu.map(
                d => <MainButton changeIsOpenMenu={this.props.changeIsOpenMenu} name={d.name} url={d.url} mutateStateFunc={this.props.mutateStateFunc} />
            );
     
        return (
            <>
            {(this.props.isOpenMenu) && <div className={style.menuOpenList}><Menu /></div>}
            
            <div className={style.headerMenu}>
                <div className={style.headerNav}>
                    <p><span><NavLink to='/Main'>Geliantus Shop</NavLink></span></p>
                    {/* {setMainMenu} Это кнопки по типу 'Главная'*/}
                    <NavLink className={style.menuLink} to='#' onClick={() => this.props.changeIsOpenMenu()}><span>Каталог товаров</span></NavLink>
                    <NavLink className={style.menuLink} to='#' onClick={() => this.props.isOpenRegistrationModal()}><span>Регистрация</span></NavLink>
                    <NavLink className={style.menuLink} to='/Autorisation'><span>Вход</span></NavLink>
                </div>
        
                <div className={style.headerRightBox}>
                    <input type="text" placeholder='Поиск...'></input>
                    <button></button>
                    <div className={style.cart} onClick={() => this.props.isOpenCartModal()}>корзина {this.props.productsCount}</div>
                </div>
    
             </div>
        </>
        );} else return <div></div>
    }

}

let mapStateToProps = (state) => {
    return {
        menu: state.HeaderMenu.menu,
        mutateState: state.Project.mutateState,
        isOpenMenu: state.HeaderMenu.isOpenMenu,
        mainMenu: state.HeaderMenu.mainMenu,
        productsCount: state.CartReducer.productsCount,
        isOpenCart: state.HeaderMenu.isOpenCart
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        menuSetCategories :(menu) => {
            dispatch(SetMenuActionCreator(menu))
        },
        setMainMenu: (menu) => {
            dispatch(SetMainMenuActionCreator(menu));
        },
        addWayLink: (name, url) => {
            dispatch(wayLinkActionCreator(name, url))
        },
        mutateStateFunc: () => {
            dispatch(mutateStateActionCreator())
        }, 
        changeIsOpenMenu: (booleanType = ' ') => {
            dispatch(changeIsOpenMenuAC(booleanType))
        },
        isOpenRegistrationModal: (booleanType = ' ') => {
            dispatch(isOpenRegistrationModalAC(booleanType));
        },
        isOpenCartModal: (booleanType = ' ') => {
            dispatch(isOpenCartModalAC(booleanType));
        }
    }
}

let withRouteHeaderMenu = withRouter(HeaderMenu)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteHeaderMenu);

