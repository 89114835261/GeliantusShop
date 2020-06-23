import React from 'react';
import F from './CategoryPageContainer.module.css';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import {quickSort, changeProducts, setChildsCat} from '../redux/Project-reducer';
import {setFlowersActionCreator, setCountFlowersActionCreator, changeCurrentValueActionCreator, setPageNameActionCreator, setCoverPageActionCreator, setSpecificationlistActionCreator, setItemCategoryAC, setChildCategoryAC} from '../redux/Flowers-reducer';
import { withRouter } from 'react-router-dom';
import FiltersForm from './FiltersForm/FiltersForm';
import ChildCategoryBlockContainer from './ChildCategory/ChildCategoryBlock';
import Axios from 'axios';


class Flowers extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }

    componentDidMount() {
        let mutate = this.props.mutateState;
        Axios.get('/Categories.json').then(response => {this.props.setItemCategory(response.data.filter(currentElement => currentElement.catId == this.props.match.params.catId)); this.props.setChildsCategory(setChildsCat(this.props.itemCategory, response.data, 'childs', 'catId'))} );
        Axios.get('/Products.json').then(response => {this.props.setFlowers(changeProducts(response.data.items, this.props.match.params.catId))});
        this.mutate = this.props.mutateState; 
         this.props.setCountFlowers(15);
        
    }
 
    componentDidUpdate() {  
        if(this.mutate != this.props.mutateState) {
            Axios.get('/Products.json').then(response => {this.props.setFlowers(changeProducts(response.data.items, this.props.match.params.catId))});
            this.mutate = this.props.mutateState;
            Axios.get('/Categories.json').then(response => {this.props.setItemCategory(response.data.filter(currentElement => currentElement.catId == this.props.match.params.catId)); this.props.setChildsCategory(setChildsCat(this.props.itemCategory, response.data, 'childs', 'catId'))} )
        }
    }

    render() {
        let changeOption = React.createRef();
        let func = () => {
            this.props.changeCurrentValue(changeOption.current.options.selectedIndex + 1)
        }
         // функция сортирующая массив
         //Удалить перед сборкой. Этим занимается сервер
        let sortProduct = () => {
            if(this.props.currentValue == 1) {
                let sortProducts = quickSort(this.props.flowers, 'price');
                sortProducts.reverse();
                return sortProducts;
            } else if(this.props.currentValue == 2) {
                let sortProducts = quickSort(this.props.flowers, 'price');
                return sortProducts;
            } else if(this.props.currentValue == 3) {
                let sortProducts = quickSort(this.props.flowers, 'orders');
                return sortProducts;
            } else{
                let sortProducts = this.props.flowers;
                return sortProducts
            }
           
        }
        let endProductList = sortProduct().map( s =>
            <Product key={s.id}
                name={s.name}
                price={s.price}
                orders={s.orders}
                id={s.id} 
                raiting={s.raiting}
                img={s.photo}
                url={this.props.location.pathname}
                
            />
          );    
         
        if(this.props.itemCategory) {
        return(
            <div className={F.wrapper}>
                <div className={F.topBoxWrapper}>
                   
                    <div className={F.nameBox}>
                        <div className={F.cover}>
                            <h1>{this.props.itemCategory.name}</h1>
                            <img src={this.props.itemCategory.cover}></img>
                        </div>
                        
                    </div>
                    {this.props.childCategory.length != 0 && this.props.mainUrl ? <ChildCategoryBlockContainer mainUrl={this.props.mainUrl} childCategory={this.props.childCategory} /> : null}
                </div>
                <div className={F.filtersBox}>
                    <div className={F.blockFiltersElement}>
                        <select ref={changeOption} value={this.props.currentValue} name='sdsd' onChange={ () => func()} >
                            <option value='1'>Возрастанию цены</option>
                            <option value='2'>Убыванию цены</option>
                            <option value='3'>Количество заказов</option>
                        </select>  
                    </div>
                    <FiltersForm/>
                </div>
                
                <div className={F.productsLits}>
                    {endProductList}
                </div>
        </div>
        );} else return <div></div>
    }
}

let mapStateToProps = (state) => {
    return {
        flowers: state.Flowers.flowers,
        countFlowers: state.Flowers.countFlowers,
        specificationList: state.Flowers.specificationList,
        mutateState: state.Project.mutateState,
        currentValue: state.Flowers.currentValue,
        pageName: state.Flowers.pageName,
        coverPage: state.Flowers.coverPage,
        itemCategory: state.Flowers.itemCategory,
        childCategory: state.Flowers.childCategory,
        mainUrl: state.Project.mainUrl
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setFlowers: (flowers) => {
        dispatch(setFlowersActionCreator(flowers))
      },
      setCountFlowers: (count) => {
          dispatch(setCountFlowersActionCreator(count))
      },
      changeCurrentValue: (value) => {
          dispatch(changeCurrentValueActionCreator(value))
      },
      setPageName: (name) => {
          dispatch(setPageNameActionCreator(name))
      },
      setCoverPage: (url) => {
          dispatch(setCoverPageActionCreator(url))
      },
      setSpecificationList: (specificationList) => {
          dispatch(setSpecificationlistActionCreator(specificationList))
      },
      setItemCategory: (catogory) => {
          dispatch(setItemCategoryAC(catogory))
      },
      setChildsCategory: (childs) => {
          dispatch(setChildCategoryAC(childs))
      }
    }
}

let withRouteUrlFlowers = withRouter(Flowers)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteUrlFlowers);

