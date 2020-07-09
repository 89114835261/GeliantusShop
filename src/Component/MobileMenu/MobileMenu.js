import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MobileMenu.module.scss';

let MobileMenu = (props) => {
    return(
        <div className={style.mobileMenu}>
            <div className={style.wrapper}>
                <NavLink to="/Main" className={style.home}></NavLink>
                <NavLink to="#" className={style.find}></NavLink>
                <NavLink to="#" className={style.menu} onClick={() => props.changeIsOpenMenu()}></NavLink>
                <NavLink to="/Profile" className={style.profile}></NavLink>
                <NavLink to="#" className={style.cart} onClick={() => props.isOpenCartModal()}><span>{props.productsCount}</span></NavLink>
            </div>
        </div>
    )
}

export default MobileMenu;