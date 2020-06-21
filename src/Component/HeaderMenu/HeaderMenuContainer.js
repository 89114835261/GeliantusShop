import React from 'react';
import { connect } from 'react-redux';
import {SetMenuActionCreator, changeIsOpenMenuAC} from '../redux/HeaderMenuReducer';
import {wayLinkActionCreator, mutateStateActionCreator} from './../redux/Project-reducer';
import H from './HeaderMenu.module.css';
import Button from './button/Button';

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let buttonList = [ // Получаем созданные кнопки
            {name: 'Главная', url: '/Main'}
        ]
        
        let catList = [ //Получаем категории
            {catId: 1, name: 'Цветы', get url() {return `/Products/Category/Category-Cvety/${this.catId}`} }, 
            {catId: 2, name: 'Товары для дома', get url() { return `/Products/Category/Category-Tovary-Dlya-Doma/${this.catId}`}},
            {catId: 3, name: 'Декор', get url() { return `/Products/Category/Category-Dekor/${this.catId}`}}
        ]

        let menuList = [
            buttonList[0],
            ...catList //Разворачиваем массив catList 
            // {name: 'Растения', url: '/Plants'},
            // {name: 'Декор', url: '/Decor'},
            // {name: 'Цветочные ёмкости', url: '/Decor'}
        ]   
        this.props.menuSet(menuList)
    }
    render() {
        
       let arrMenu = this.props.menu.map(
           m => <Button changeIsOpenMenu={this.props.changeIsOpenMenu} name={m.name} url={m.url} mutateStateFunc={this.props.mutateStateFunc} />
       )
    
        return (
            <>
            {this.props.isOpenMenu && <div className={H.menuOpenList}>{arrMenu}</div>}
            <div class={H.headerMenu}>
            
            <button onClick={() => this.props.changeIsOpenMenu()}>Товары</button>
            
            <div className={H.headerNav}>
    
                
               
            </div>
    
          <div className={H.headerRightBox}>
              <input type="text"></input>
              <button>S</button>
          </div>
    
        </div>
        </>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        menu: state.HeaderMenu.menu,
        mutateState: state.Project.mutateState,
        isOpenMenu: state.HeaderMenu.isOpenMenu
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        menuSet :(menu) => {
            dispatch(SetMenuActionCreator(menu))
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