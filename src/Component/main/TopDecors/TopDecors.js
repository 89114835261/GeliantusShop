import React from 'react';
import TP from './TopDecors.module.css';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import {setDecorsActionCreator, setCountDecorsActionCreator} from './../../redux/TopDecors-reduser';
import { withRouter } from 'react-router-dom';


class TopDecors extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        this.props.setDecors([ //Сэтаем товары
            {id: 1, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, description: 'Бла-2', views: '23',homePaymant:  true, catId: [1, 3, 5, 7, 2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 2, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 3, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 4, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 5, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, description: 'Бла-2', views: '23', homePaymant:  true, catId: [3], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 6, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1, 2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 7, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, description: 'Бла-2', views: '23', homePaymant:  true, catId: [3], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 8, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [4], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 9, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [5], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 10, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, description: 'Бла-2', views: '23', homePaymant:  true, catId: [5], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 11, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, description: 'Бла-2', views: '23', homePaymant:  true, catId: [8], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 12, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, description: 'Бла-2', views: '23', homePaymant:  true, catId: [6], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 13, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 14, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, description: 'Бла-2', views: '23', homePaymant:  true, catId: [7], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 15, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, description: 'Бла-2', views: '23', homePaymant:  true, catId: [6], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 16, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1, 2], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 17, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 18, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 19, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4,description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]},
            {id: 20, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, description: 'Бла-2', views: '23', homePaymant:  true, catId: [1], specId: [2, 4, 9], specifications: [{id: 2, value: 'Красный'}]}
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
                url={this.props.itemUrl}  
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

let withRouteTopDecors = withRouter(TopDecors)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteTopDecors);