import React from 'react';
import TP from './TopProducts.module.css';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import {setProductsActionCreator, setCountProductsActionCreator} from '../../redux/TopProducts-reducer';


class TopProducts extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        this.props.setProducts([ //Сэтаем товары
            {id: 1, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 2, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 3, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 4, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 5, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 6, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 7, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 8, name: 'ААВВВВВВВВs', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 9, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 10, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
            {id: 11, name: 'Лилия Босновнаsssssssя', price: '2380', photos: {small: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', fullDescription: 'Тут будет большое спер пупер описанпие. Оно будет чёткой прям обосраться можно какое чёткое', homePaymant: 'True',raiting: 4.7,voices: 54,countProducts: null }
          ]);
         this.props.setCountProducts(5) //Сэтаем кол-во товаров на странице
        
    }


    render() {

        

        let sortProducts = quickSort(this.props.products, 'id'); // алерт?
        let endArrProducts = sortProducts.slice(sortProducts.length - this.props.countProducts, sortProducts.length)
        let endProductList = endArrProducts.map( s =>
            <Product 
                name={s.name}
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

export default connect(mapStateToProps, mapDispatchToProps) (TopProducts);