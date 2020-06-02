import React from 'react';
import H from './HeaderMenu.module.css';
import { NavLink } from 'react-router-dom';

let HeaderMenu = (props) => {
    return (
        <div class={H.headerMenu}>
                    
        <div className={H.headerNav}>
            <NavLink to="/Main"><span>Главная</span></NavLink>
            <NavLink to="/Flowers"><span>Цветы</span></NavLink>
            <NavLink to="/Plants"><span>Растения</span></NavLink>
            <NavLink to="/Decor"><span>Декор</span></NavLink>
            <NavLink to="/Container"><span>Цветочные ёмкости</span></NavLink>
        </div>

      <div className={H.headerRightBox}>
          <input type="text"></input>
          <button>S</button>
      </div>

    </div>
    );
}

export default HeaderMenu;