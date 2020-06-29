import React from 'react';
import TP from './../Main.module.scss';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import {setDecorsActionCreator, setCountDecorsActionCreator} from './../../redux/TopDecors-reduser';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';


class TopDecors extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        Axios.get('/Products.json').then(response => {this.props.setDecors(response.data.items)})
         this.props.setCountDecors(9) //Сэтаем кол-во товаров на странице
        
    }


    render() {
        let sortProducts = quickSort(this.props.topDecors, 'id'); // функция сортирующая массив по заданному параметру
        let endArrProducts = sortProducts.slice(sortProducts.length - this.props.countDecors, sortProducts.length);
        let endProductList = endArrProducts.map( s =>
            <Product key={s.id}
                name={s.name}
                price={s.price}
                orders={s.orders}
                id={s.id}
                raiting={s.raiting}
                img={s.photo}
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