import React from 'react';
import { connect } from 'react-redux';
import {SetMenuActionCreator, changeIsOpenMenuAC, SetMainMenuActionCreator} from '../redux/HeaderMenuReducer';
import {wayLinkActionCreator, mutateStateActionCreator} from './../redux/Project-reducer';
import H from './HeaderMenu.module.css';
import Button from './button/Button';
import MainButton from './MainButton/MainButton';

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let buttonList = [ // Получаем созданные кнопки
            {name: 'Главная', url: '/Main'}
        ]
        this.props.setMainMenu(buttonList);

        let catList = [ //Получаем категории
            {catId: 0, name: 'Каталог', get url() {return `/Kategoriya-Katalog/${this.catId}`} }, 
            {catId: 1, name: 'Цветы', get url() {return `/Kategoriya-Cvety/${this.catId}`} }, 
            {catId: 2, name: 'Товары для дома', get url() { return `/Kategoriya-Tovary-Dlya-Doma/${this.catId}`}},
            {catId: 3, name: 'Декор', get url() { return `/Kategoriya-Dekor/${this.catId}`}}
        ]

        let menuList = [
            ...catList //Разворачиваем массив catList 
            // {name: 'Растения', url: '/Plants'},
            // {name: 'Декор', url: '/Decor'},
            // {name: 'Цветочные ёмкости', url: '/Decor'}
        ]   
        this.props.menuSetCategories(menuList)

    }
    render() {
        if(this.props.mainMenu && this.props.menu) {
            let setMainMenu = this.props.mainMenu.map(
                d => <MainButton changeIsOpenMenu={this.props.changeIsOpenMenu} name={d.name} url={d.url} mutateStateFunc={this.props.mutateStateFunc} />
            );
     
            let arrMenu = this.props.menu.map(
                m => <Button changeIsOpenMenu={this.props.changeIsOpenMenu} name={m.name} url={m.url} mutateStateFunc={this.props.mutateStateFunc} />
            );
        return (
            <>
            {this.props.isOpenMenu && <div className={H.menuOpenList}>{arrMenu}</div>}
            <div class={H.headerMenu}>
                <div className={H.headerNav}>
                    <p><span>Geliantus Shop</span></p>
                    {setMainMenu}
                    <button onClick={() => this.props.changeIsOpenMenu()}>Товары</button>
                </div>
        
                <div className={H.headerRightBox}>
                    <input type="text"></input>
                    <button>S</button>
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
        }
    }
}

let HeaderMenuContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderMenu);

export default HeaderMenuContainer;