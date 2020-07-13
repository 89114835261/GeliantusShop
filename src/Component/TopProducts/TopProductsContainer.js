import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCountProductsActionCreator, setTopProductsCatidAC, setTopProductsAC, setSortParameterAC, topProductsNameAC } from '../redux/TopProducts-reducer';
import Axios from 'axios';
import TopProducts from './TopProducts';


class TopProductsContainer extends React.Component {
    componentDidMount() {
        Axios.get('/TopProducts.json').then(response => {
            this.props.setTopProductsCatid(response.data.catId);
            this.props.setTopProductsName(response.data.title);
            this.props.setSortParameter(response.data.sortParameter);
            this.props.setCountProducts(response.data.productsCount) //Сэтаем кол-во товаров в блоке
            Axios.get('/Products.json').then(response => {
                this.props.setTopProducts(response.data.items, this.props.topProductsCatId[0])
            })
        });
      
       
    }

    render() {
    return(
            <>
            {(this.props.topProducts && this.props.topProducts.length > 0) ? <TopProducts sortParameter={this.props.sortParameter} itemUrl={this.props.itemUrl} countProducts={this.props.countProducts} TopProductsList={this.props.topProducts} topProductsName={this.props.topProductsName}/> : 'sdsdsdsdsdsdsdsdsdsds'}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.TopProducts.products,
        countProducts: state.TopProducts.countProducts,
        topProductsCatId: state.TopProducts.topProductsCatId,
        topProducts: state.TopProducts.topProducts,
        topProductsName: state.TopProducts.topProductsName,
        sortParameter: state.TopProducts.sortParameter
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setCountProducts: (count) => {
          dispatch(setCountProductsActionCreator(count))
      },
      setTopProductsCatid: (arr) => {
          dispatch(setTopProductsCatidAC(arr))
      },
      setTopProducts: (arr, id) => {
          dispatch(setTopProductsAC(arr, id))
      },
      setTopProductsName: (name) => {
          dispatch(topProductsNameAC(name))
      },
      setSortParameter: (parameter) => {
          dispatch(setSortParameterAC(parameter))
      }
    }
}

let withRouteTopProducts = withRouter(TopProductsContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteTopProducts);