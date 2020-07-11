import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {setProductsActionCreator, setCountProductsActionCreator} from '../../redux/TopProducts-reducer';
import Axios from 'axios';
import { setTopProductsCatidAC, setTopProductsAC } from './../../redux/Main-reducer';
import TopProducts from './TopProducts';


class TopProductsContainer extends React.Component {
    componentDidMount() {
        Axios.get('/TopProducts.json').then(response => {
            this.props.setTopProductsCatid(response.data);
            Axios.get('/Products.json').then(response => {
                this.props.setTopProducts(response.data.items, this.props.TopProductsCatId[0], 1)
                this.props.setTopProducts(response.data.items, this.props.TopProductsCatId[1], 2)
                this.props.setTopProducts(response.data.items, this.props.TopProductsCatId[2], 3)
                this.props.setProducts(response.data.items)
                this.props.setCountProducts(5) //Сэтаем кол-во товаров на странице
            })
        });
      
       
    }

    render() {
    return(
            <>
            {(this.props.topProductsBoxOne && this.props.topProductsBoxOne.length > 0) ? <TopProducts itemUrl={this.props.itemUrl} countProducts={this.props.countProducts} TopProductsList={this.props.topProductsBoxOne} boxNameOne={this.props.boxNameOne}/> : null}
            {(this.props.topProductsBoxTwo && this.props.topProductsBoxTwo.length > 0) ? <TopProducts itemUrl={this.props.itemUrl} countProducts={this.props.countProducts} TopProductsList={this.props.topProductsBoxTwo} boxNameTwo={this.props.boxNameTwo}/> : null}
            {(this.props.topProductsBoxThree && this.props.topProductsBoxThree.length > 0) ? <TopProducts itemUrl={this.props.itemUrl} countProducts={this.props.countProducts} TopProductsList={this.props.topProductsBoxThree} boxNameThree={this.props.boxNameThree}/> : null}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.TopProducts.products,
        countProducts: state.TopProducts.countProducts,
        TopProductsCatId: state.Main.TopProductsCatId,
        topProductsBoxOne: state.Main.topProductsBoxOne,
        topProductsBoxTwo: state.Main.topProductsBoxTwo,
        topProductsBoxThree: state.Main.topProductsBoxThree,
        boxNameOne: state.Main.boxNameOne,
        boxNameTwo: state.Main.boxNameTwo,
        boxNameThree: state.Main.boxNameThree
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setProducts: (products) => {
        dispatch(setProductsActionCreator(products))
      },
      setCountProducts: (count) => {
          dispatch(setCountProductsActionCreator(count))
      },
      setTopProductsCatid: (arr) => {
          dispatch(setTopProductsCatidAC(arr))
      },
      setTopProducts: (arr, id, boxNumber) => {
          dispatch(setTopProductsAC(arr, id, boxNumber))
      }
    }
}

let withRouteTopProducts = withRouter(TopProductsContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteTopProducts);