import React from 'react';
import { connect } from 'react-redux';
import C from './CartContainer.module.scss';
import {isOpenCartModalAC} from './../redux/HeaderMenuReducer';
import { deleteProductAC, changeCountAC } from './../redux/Cart-reducer';

class CartContainer extends React.Component {
    render() {

        return(
            <div className={C.cartModal}>
                <div className={C.cartBox}>
                    <button onClick={() => this.props.isOpenCartModal(false)}>Закрыть окно</button>
                <div className={C.boxWrapper}>
                {(this.props.productsCart.length > 0) ? this.props.productsCart.map((item, i) => 
                <div className={C.wrapper} >

                <img src={item.photo[0].small} />
                <div className={C.infoBox}><p>{item.name}</p>
                <ul>
                    <li>Цена: {item.price}₽</li>

                <li>Количество: <button onClick={() => this.props.changeCount(i, true)}>+</button> {item.count} <button onClick={() => this.props.changeCount(i, false)}>-</button> {item.totalPrice}₽</li>
                </ul>
                <button className={C.delete} onClick={() => this.props.deleteProduct(item.id)}>Убрать товар</button>
                </div>
            </div>
            ) : "Корзина пуста"}
            </div>
            {this.props.productsCart.length > 0 && <div>
                <p>Всего товаров: {this.props.productsTotalCount}</p>
                <p>Общая сумма: {this.props.productsTotalPrice}</p>
            </div>}
            
            <button onClick={() => this.props.isOpenCartModal(false)}>Закрыть окно</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productsCart: state.CartReducer.productsCart,
        productsCount: state.CartReducer.productsCount,
        productsTotalCount: state.CartReducer.productsTotalCount,
        productsTotalPrice: state.CartReducer.productsTotalPrice,
        swith: state.CartReducer.swith
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isOpenCartModal: (booleanType = ' ') => {
            dispatch(isOpenCartModalAC(booleanType));
        },
        deleteProduct: (id) => {
            dispatch(deleteProductAC(id));
        },
        changeCount: (id, boolean) => {
            dispatch(changeCountAC(id, boolean));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartContainer);