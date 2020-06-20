import React from 'react';
import TP from './TopFlowers.module.css';
import { connect } from 'react-redux';
import Product from '../../Product/Product';
import {quickSort} from '../../redux/Project-reducer';
import {setTopFlowersActionCreator, setCountTopFlowersActionCreator} from '../../redux/TopFlowers-reducer';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';


class TopFlowers extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
    componentDidMount() {
        Axios.get('/Products.json').then(response => {this.props.setFlowers(response.data.items)})
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
                raiting={s.raiting}
                img={s.photo}
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