import React from 'react';
import TP from './TopFlowers.module.css';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import {setTopFlowersActionCreator, setCountTopFlowersActionCreator} from '../../redux/TopFlowers-reducer';
import { withRouter } from 'react-router-dom';


class TopFlowers extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        this.props.setFlowers([ //Сэтаем товары
        {id: 1, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 2, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 3, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 4, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 5, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 6, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 7, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 8, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 9, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 10, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'}
         ]);
         this.props.setCountFlowers(5) //Сэтаем кол-во товаров на странице
        
    }


    render() {
        let sortProducts = quickSort(this.props.topFlowers, 'id'); // функция сортирующая массив
        let endArrProducts = sortProducts.slice(sortProducts.length - this.props.countFlowers, sortProducts.length);
        let endProductList = endArrProducts.map( s =>
            <Product 
                name={s.name}
                price={s.price}
                orders={s.orders}
                id={s.id}
                url={this.props.itemUrl}
            />
          );
            
        return(
            <div className={TP.popular}>
            <h1>Популярные цветы</h1>
            <div className={TP.productsLits}>
            
            {endProductList}

            </div>
        </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        topFlowers: state.TopFlowers.topFlowers,
        countFlowers: state.TopFlowers.countTopFlowers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setFlowers: (flowers) => {
        dispatch(setTopFlowersActionCreator(flowers))
      },
      setCountFlowers: (count) => {
          dispatch(setCountTopFlowersActionCreator(count))
      }
    }
}

let withRouteTopFlowers = withRouter(TopFlowers);

export default connect(mapStateToProps, mapDispatchToProps) (withRouteTopFlowers);