import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemProduct from './itemProduct';
import {setProductActionCreator} from './../redux/Product-reducer';

class itemProductContainer extends React.Component {
    
    componentDidMount() {
           // let itemProduct = this.props.products[this.productId]
        let productId = this.props.match.params.productId;
      this.props.setProduct(
        [
            {
        id: 10, 
        name: 'Лилия Босновная', 
        price: '2380', 
        photos: {small: 'url1', large: 'url2'}, 
        orders: 6, preDescriptions: 'Бла-1', 
        fullDescription: 'Тут будет большое спер пупер описанпие. Оно будет чёткой прям обосраться можно какое чёткое', 
        homePaymant: 'True',
        raiting: 4.7,
        voices: 54,
        countProducts: null 
        }]
        );
      
    }

    render() {   
        return(
            <div>
            
            <ItemProduct 
                name={this.props.product[0].name}
                // photoSmall={this.props.product.photos.small}
                // photoLarge={this.props.product.photos.large}
                fullDescription={this.props.product[0].fullDescription}
                price={this.props.product[0].price}
                orders={this.props.product[0].orders}
                raiting={this.props.product[0].raiting}
                voices={this.props.product[0].voices}
            />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        product: state.Product.product
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product) => {
            dispatch(setProductActionCreator(product))
        }
    }
}

let WithUrlDataContainerComponent = withRouter(itemProductContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent);