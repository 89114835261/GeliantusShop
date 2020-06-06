import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemProduct from './itemProduct';
import {setProductActionCreator} from './../redux/Product-reducer';

class itemProductContainer extends React.Component {
    
    componentDidMount() {
       
       
      this.props.setProduct(
        [
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
            {id: 11, name: 'Лилия Босновнаsssssssя', price: '2380', photos: {small: 'url1', large: 'url2'}, orders: 6, parameters: {color: 'red'}, fullDescription: 'Тут будет большое спер пупер описанпие. Оно будет чёткой прям обосраться можно какое чёткое', homePaymant: 'True',raiting: 4.7,voices: 54,countProducts: null }
            ]
        );
      
      
    }

    render() {  
        if(this.props.product.length > 0) { 
        let productId = this.props.match.params.productId;
        let itemProductObj = this.props.product[productId - 1]

        return(
            <div>
            
            <ItemProduct 
                name={itemProductObj.name}
                // photoSmall={this.props.product.photos.small}
                // photoLarge={this.props.product.photos.large}
               descriptionBoxSwitch={this.props.match.params.Parameters}
                description={itemProductObj.fullDescription}
                parameters={itemProductObj.parameters}
                price={itemProductObj.price}
                orders={itemProductObj.orders}
                raiting={itemProductObj.raiting}
                voices={itemProductObj.voices}
                id={itemProductObj.id}
            />
           
            </div>
        );
    } else return(<div>s</div>);
    
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