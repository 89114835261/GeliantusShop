import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemProduct from './itemProduct';
import {setProductActionCreator, setSpecificationsItemProductAC} from './../redux/Product-reducer';

class itemProductContainer extends React.Component {
    
    componentDidMount() {
       
       
      this.props.setProduct(
        [
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
        ]
        );
        // let requestSetSpecification = this.props.product[1].specId.join('_');//Строка вида 1_2_5
        // //Далее делаем "типа" запрос вида /Specifications?id=2_5_8
        //И получаем характеристики с id 2, 5, 8
        let specifications = [
            {id: 2, name: 'цвет', technicalName: 'cvet'},
            {id: 5, name: 'цвет', technicalName: 'cvet'},
            {id: 8, name: 'цвет', technicalName: 'cvet'}
        ]
        this.props.setSpecifications(specifications);
    }
    // При реальных запросах, мы не будем использовать DidUpdate, а запустим получение
    // айдишников спецификаций при получении ответа в DidMount (response => наша функция)
    componentDidUpdate() {

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
                description={itemProductObj.description}
                parameters={itemProductObj.parameters}
                price={itemProductObj.price}
                orders={itemProductObj.orders}
                raiting={itemProductObj.raiting}
                voices={itemProductObj.voices}
                id={itemProductObj.id}
                Specification={this.props.specifications}
                mutateState={this.props.mutateState}
            />
           
            </div>
        );
    } else return('');
    
    }

}

let mapStateToProps = (state) => {
    return {
        product: state.Product.product,
        specifications: state.Product.specificationItemProduct,
        mutateState: state.Project.mutateState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product) => {
            dispatch(setProductActionCreator(product))
        }, 
        setSpecifications: (specifications) => {
            dispatch(setSpecificationsItemProductAC(specifications))
        }
    }
}

let WithUrlDataContainerComponent = withRouter(itemProductContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent);