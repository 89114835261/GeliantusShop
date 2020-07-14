import React from 'react';
import C from './ChildCategoryBlock.module.scss';
import { withRouter, NavLink } from 'react-router-dom';

let ChildCategoryBlockContainer = (props) => {

    
    let setUrl = (URL, catUrl) => {
     
        return URL + catUrl;
    }
    let categoryList = props.childCategory.map( item => 
            <NavLink key={ item.name }className={C.catBlock} to={item.url}>
                <img src={item.cover} />
                <span>{item.name}</span>
            </NavLink>
        );
        return(
            <div className={C.wrapper}>{categoryList}</div>
        );
}


let withRouteChildBlock = withRouter(ChildCategoryBlockContainer);

export default withRouteChildBlock;