import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemProduct from './itemProduct';
import {setProductActionCreator, isOpenFullImageAC, setItemProductCoverAC, setSpecificationsItemProductAC, setLongUrlActionCreator, setitemProductObjActionCreator} from './../redux/Product-reducer';
import Axios from 'axios';

class itemProductContainer extends React.Component {
    
    componentDidMount() {
        Axios.get('/Products.json').then(response => {this.props.setProduct(response.data.items, this.props.match.params.productId)});
        // let requestSetSpecification = this.props.product[1].specId.join('_');//Строка вида 1_2_5
        // //Далее делаем "типа" запрос вида /Specifications?id=2_5_8
        //И получаем характеристики с id 2, 5, 8
    }
    // При реальных запросах, мы не будем использовать DidUpdate, а запустим получение
    // айдишников спецификаций при получении ответа в DidMount (response => наша функция)
    componentWillUnmount() {
        this.props.setProduct(null);
        this.props.setProductCover(null);
    }
    render() {     
        // Ниже условие формирующее длину URL к которой мы будем прибавлять 
        // Description или Specification  и т.д. т.е. наши вкладки "описание", "Характеристики"
        //на странице товара
        if(this.props.longUrl === null || this.props.match.params.Parameters == 'Description') { 
            let num = this.props.location.pathname.lastIndexOf('/'); // -12, что убрать слово Description из основного URL
            this.props.setLongUrl(num); // Устанавливаем это число в редьюсер
        }
        {(this.props.product && !this.props.productCover) && this.props.setProductCover(this.props.product[0].photo[0].small)}
        return(
            <div>
            
            {this.props.product && <ItemProduct 
                itemProduct={this.props.product[0]}
                // photoSmall={this.props.product.photos.small}
                // photoLarge={this.props.product.photos.large}
                url={this.props.location.pathname}
                productCover={this.props.productCover}
                urlLong={this.props.longUrl}
                descriptionBoxSwitch={this.props.match.params.Parameters}
                mutateState={this.props.mutateState}
                setProductCover={this.props.setProductCover}
                isOpenFullImage={this.props.isOpenFullImage }
                setIsOpenFullImage={this.props.setIsOpenFullImage}
            />}
           
            </div>
        );
   
    
    }

}
let mapStateToProps = (state) => {
    return {
        product: state.Product.product,
        productCover: state.Product.productCover,
        mutateState: state.Project.mutateState,
        longUrl: state.Product.longUrl,
        itemProductObj: state.Product.itemProductObj,
        isOpenFullImage: state.Product.isOpenFullImage,
        setIsOpenFullImage: state.Product.setIsOpenFullImage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product, id) => {
            dispatch(setProductActionCreator(product, id))
        }, 
        setSpecifications: (specifications) => {
            dispatch(setSpecificationsItemProductAC(specifications))
        },
        setLongUrl: (long) => {
            dispatch(setLongUrlActionCreator(long))
        },
        setItemObj: (obj) => {
            dispatch(setitemProductObjActionCreator(obj))
        },
        setProductCover: (url) => {
            dispatch(setItemProductCoverAC(url))
        },
        setIsOpenFullImage: () => {
            dispatch(isOpenFullImageAC())
        }
    }
}

let WithUrlDataContainerComponent = withRouter(itemProductContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent);