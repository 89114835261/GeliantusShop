import React from 'react';
import { connect } from 'react-redux';
import {SetMenuActionCreator} from '../redux/HeaderMenuReducer';
import {mutateStateActionCreator} from './../redux/Project-reducer';
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
            {catId: 1, name: 'Цветы', get url() {return `/Category/Cvety/${this.catId}`} }, 
            {catId: 2, name: 'Товары для дома', get url() { return `/Category/TovaryDlyaDoma/${this.catId}`}},
            {catId: 3, name: 'Декор', get url() { return `/Category/Decor/${this.catId}`}}
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
           m => <Button name={m.name} url={m.url} mutateState={this.props.mutateState}/>
       )
    
        return (
            <div class={H.headerMenu}>
                        
            <div className={H.headerNav}>
    
                {arrMenu}
               
            </div>
    
          <div className={H.headerRightBox}>
              <input type="text"></input>
              <button>S</button>
          </div>
    
        </div>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        menu: state.HeaderMenu.menu,
        mutateState: state.Project.mutateState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        menuSet :(menu) => {
            dispatch(SetMenuActionCreator(menu))
        },
        mutateState: () => {
            dispatch(mutateStateActionCreator())
        }
    }
}

let HeaderMenuContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderMenu);

export default HeaderMenuContainer;