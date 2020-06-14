import React from 'react';
import C from './ChildCategoryBlock.module.css';
import { withRouter, NavLink } from 'react-router-dom';

let ChildCategoryBlockContainer = (props) => {

    let categoryList = props.childCategory.map( item => 
            <NavLink className={C.catBlock} to={item.url}>
                <img src={item.url} />
                <span>{item.name}</span>
            </NavLink>
        );
        return(
            <div className={C.wrapper}>{categoryList}</div>
        );
}


let withRouteChildBlock = withRouter(ChildCategoryBlockContainer);

export default withRouteChildBlock;