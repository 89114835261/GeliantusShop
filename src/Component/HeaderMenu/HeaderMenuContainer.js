import React from 'react';
import { connect } from 'react-redux';
import {SetMenuActionCreator, changeIsOpenMenuAC, SetMainMenuActionCreator, isOpenRegistrationModalAC} from '../redux/HeaderMenuReducer';
import {wayLinkActionCreator, mutateStateActionCreator} from './../redux/Project-reducer';
import H from './HeaderMenu.module.scss';
import Button from './button/Button';
import MainButton from './MainButton/MainButton';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

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
     
            let arrMenu = this.props.menu.map(
                m => m.catId != 0 && <Button key={m.catId} changeIsOpenMenu={this.props.changeIsOpenMenu} name={m.name} url={m.url} mutateStateFunc={this.props.mutateStateFunc} />
            );
        return (
            <>
            {this.props.isOpenMenu && <div className={H.menuOpenList}>{arrMenu}</div>}
            <div className={H.headerMenu}>
                <div className={H.headerNav}>
                    <p><span><NavLink to='/Main'>Geliantus Shop</NavLink></span></p>
                    {/* {setMainMenu} Это кнопки по типу 'Главная'*/}
                    <NavLink className={H.menuLink} to onClick={() => this.props.changeIsOpenMenu()}><span>Каталог товаров</span></NavLink>
                    <NavLink className={H.menuLink} to onClick={() => this.props.isOpenRegistrationModal()}><span>Регистрация</span></NavLink>
                    <NavLink className={H.menuLink} to='/Autorisation'><span>Вход</span></NavLink>
                </div>
        
                <div className={H.headerRightBox}>
                    <input type="text" placeholder='Поиск...'></input>
                    <button></button>
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
        mainMenu: state.HeaderMenu.mainMenu
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
        }
    }
}

let HeaderMenuContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderMenu);

export default HeaderMenuContainer;