import React from 'react';
import TP from './TopDecors.module.css';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import {setDecorsActionCreator, setCountDecorsActionCreator} from './../../redux/TopDecors-reduser';


class TopDecors extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        this.props.setDecors([ //Сэтаем товары
        {id: 1, name: 'Черепашка керамическая', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 2, name: 'Цветок железный', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 3, name: 'Керамический фламинго', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 4, name: 'Ромашка тканевая', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 5, name: 'Украшение песок', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 6, name: 'Кожанное плетение', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 7, name: 'Ремешок кожа', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 8, name: 'Борщевик керамика', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 9, name: 'Подставка керамика', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'},
        {id: 10, name: 'Подставка металл', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True'}
         ]);
         this.props.setCountDecors(9) //Сэтаем кол-во товаров на странице
        
    }


    render() {
        let sortProducts = quickSort(this.props.topDecors, 'id'); // функция сортирующая массив по заданному параметру
        let endArrProducts = sortProducts.slice(sortProducts.length - this.props.countDecors, sortProducts.length);
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
            <h1>Популярный декор</h1>
            <div className={TP.productsLits}>
            
            {endProductList}

            </div>
        </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        topDecors: state.TopDecors.topDecors,
        countDecors: state.TopDecors.countDecors
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setDecors: (flowers) => {
        dispatch(setDecorsActionCreator(flowers))
      },
      setCountDecors: (count) => {
          dispatch(setCountDecorsActionCreator(count))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TopDecors);