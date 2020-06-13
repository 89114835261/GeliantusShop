import React from 'react';
import TP from './TopProducts.module.css';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import { withRouter } from 'react-router-dom';
import {setProductsActionCreator, setCountProductsActionCreator} from '../../redux/TopProducts-reducer';


class TopProducts extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        this.props.setProducts([ //Сэтаем товары
            {id: 1, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, description: 'Бла-2', views: '23',homePaymant:  true, catId: [1, 3, 5, 7, 2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 2, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 3, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 4, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 5, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, description: 'Бла-2', views: '23', homePaymant:  true, catId: [3], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 6, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1, 2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 7, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, description: 'Бла-2', views: '23', homePaymant:  true, catId: [3], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 8, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [4], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 9, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [5], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 10, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, description: 'Бла-2', views: '23', homePaymant:  true, catId: [5], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 11, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, description: 'Бла-2', views: '23', homePaymant:  true, catId: [8], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 12, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, description: 'Бла-2', views: '23', homePaymant:  true, catId: [6], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 13, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 14, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, description: 'Бла-2', views: '23', homePaymant:  true, catId: [7], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 15, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, description: 'Бла-2', views: '23', homePaymant:  true, catId: [6], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 16, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1, 2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 17, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 18, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 19, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4,description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}},
            {id: 20, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}], mainCategory: {id:1, name: 'Cvety'}}   
          ]);
         this.props.setCountProducts(5) //Сэтаем кол-во товаров на странице
        
    }


    render() {

     
        
        let sortProducts = quickSort(this.props.products, 'id'); // алерт?
        let endArrProducts = sortProducts.slice(sortProducts.length - this.props.countProducts, sortProducts.length);
        let endProductList = endArrProducts.map( s =>
            <Product 
                name={s.name}
                mainCategory={s.mainCategory}
                url={this.props.itemUrl}
                price={s.price}
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