import React from 'react';
import C from './CategoryChilds.module.scss';
import { withRouter, NavLink } from 'react-router-dom';
import CategoryCard from '../../CategoryCard/CategoryCard';

let ChildCategoryBlockContainer = (props) => {

    
    let setUrl = (URL, catUrl) => {
     
        return URL + catUrl;
    }
    let categoryList = props.childCategory.map( item => 
            <CategoryCard key={ item.name } minPrice={item.minPrice} url={item.url} cover={item.cover} name={item.name}/>
        );
        return(
            <div className={C.wrapper}>{categoryList}</div>
        );
}


let withRouteChildBlock = withRouter(ChildCategoryBlockContainer);

export default withRouteChildBlock;