import React from 'react';
import TP from './../Main.module.scss';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import { withRouter } from 'react-router-dom';
import {setProductsActionCreator, setCountProductsActionCreator} from '../../redux/TopProducts-reducer';
import Axios from 'axios';


class TopProducts extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        Axios.get('/Products.json').then(response => {this.props.setProducts(response.data.items)})
         this.props.setCountProducts(5) //Сэтаем кол-во товаров на странице
        
    }


    render() {

     
        
        let sortProducts = quickSort(this.props.products, 'id'); // алерт?
        let endArrProducts = sortProducts.slice(sortProducts.length - this.props.countProducts, sortProducts.length);
        let endProductList = endArrProducts.map( s =>
            <Product key={s.id}
                name={s.name}
                mainCategory={s.mainCategory}
                url={this.props.itemUrl}
                price={s.price}
                raiting={s.raiting}
                img={s.photo}
                orders={s.orders}
                id={s.id}
            />
          );
            
        return(
            <div className={TP.popular}>
            <h1>Популярные товары</h1>
            <div className={TP.productsLits}>
            
            {endProductList}

            </div>
        </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.TopProducts.products,
        countProducts: state.TopProducts.countProducts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setProducts: (products) => {
        dispatch(setProductsActionCreator(products))
      },
      setCountProducts: (count) => {
          dispatch(setCountProductsActionCreator(count))
      }
    }
}

let withRouteTopProducts = withRouter(TopProducts)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteTopProducts);