import React from 'react';
import H from './HeaderMenu.module.css';
import { NavLink } from 'react-router-dom';
import Button from './button/Button';

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let menuList = [
            {name: 'Главная', url: '/Main'},
            {name: 'Цветы', url: '/Flowers'},
            {name: 'Растения', url: '/Plants'},
            {name: 'Декор', url: '/Decor'},
            {name: 'Цветочные ёмкости', url: '/Decor'}
        ]   
        this.props.menuSet(menuList)
    }
    render() {
    
       let arrMenu = this.props.menu.map(
           m => <Button name={m.name} url={m.url}/>
       )
    
        return (
            <div class={H.headerMenu}>
                        
            <div className={H.headerNav}>
            
                {arrMenu}
                {/* <NavLink to="/Main"><span>Главная</span></NavLink>
                <NavLink to="/Flowers"><span>Цветы</span></NavLink>
                <NavLink to="/Plants"><span>Растения</span></NavLink>
                <NavLink to="/Decor"><span>Декор</span></NavLink>
                <NavLink to="/Container"><span>Цветочные ёмкости</span></NavLink> */}
            </div>
    
          <div className={H.headerRightBox}>
              <input type="text"></input>
              <button>S</button>
          </div>
    
        </div>
        );
    }

}

export default HeaderMenu;