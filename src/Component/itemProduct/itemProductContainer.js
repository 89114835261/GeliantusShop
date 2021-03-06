import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import ItemProduct from './itemProduct';
import {setProductActionCreator, setQuestionsAC, isScrollImageAC, isOpenFullImageAC,setIsVisibleAC, setReviewsAnswerAC, setReviewsAC, setItemProductCoverAC, setSpecificationsItemProductAC, setLongUrlActionCreator, setitemProductObjActionCreator} from './../redux/Product-reducer';
import Axios from 'axios';
import { isOpenRegistrationModalAC, isOpenCartModalAC } from './../redux/HeaderMenuReducer';
import { addToCartAC } from './../redux/Cart-reducer';

class itemProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.myRefIMG = React.createRef();
        this.state = {
            currentImage: 0,
        }
        this.myRefImage = React.createRef();
    }
    componentDidMount() {
        Axios.get('/Products.json').then(response => {this.props.setProduct(response.data.items, this.props.match.params.productId)});
        // let requestSetSpecification = this.props.product[1].specId.join('_');//Строка вида 1_2_5
        // //Далее делаем "типа" запрос вида /Specifications?id=2_5_8
        //И получаем характеристики с id 2, 5, 8
        Axios.get('/Reviews.json').then(response => {this.props.setReviews(response.data)});
        Axios.get('/Questions.json').then(response => {
            this.state.product && this.props.setQuestions(response.data)
        });
        
    }
    // При реальных запросах, мы не будем использовать DidUpdate, а запустим получение
    // айдишников спецификаций при получении ответа в DidMount (response => наша функция)
    getAnswers = (id, productId) => {
        //Получаем ответы у которых reviewsId == получаемому праметру(id)
        //А он в свою очередь равен id отзыва
        {this.props.answers.length < 1 ? Axios.get('/reviewsAnswer.json').then(response =>{this.props.setReviewsAnswer(response.data); this.props.setIsVisible(id)}) : this.props.setIsVisible(id)}
    }
    componentWillUnmount() {
        this.props.setReviewsAnswer([]);
        this.props.setProduct(null);
        this.props.setProductCover(null);
        this.props.setQuestions([]);
        this.props.isScrollImage(false, 1)
    }
    raitingSubmit() {
        console.log('AXIOS_SET_RAITING')
    }
    render() {     
        // Ниже условие формирующее длину URL к которой мы будем прибавлять 
        // Description или Specification  и т.д. т.е. наши вкладки "описание", "Характеристики"
        //на странице товара
        if(this.props.longUrl === null || this.props.match.params.Parameters == 'Description') { 
            let num = this.props.location.pathname.lastIndexOf('/'); // -12, что убрать слово Description из основного URL
            this.props.setLongUrl(num); // Устанавливаем это число в редьюсер
        }
        {(this.props.product && !this.props.productCover) && this.props.setProductCover(this.props.product[0].photo)}
        return(
            <div>
            
            {(this.props.product && this.props.reviews && this.props.answers) ? <ItemProduct 
                itemProduct={this.props.product[0]}
                myRefImage={this.myRefImage}
                addToCart={this.props.addToCart}
                isOpenCartModal={this.props.isOpenCartModal}
                isOpenRegistrationModal={this.props.isOpenRegistrationModal}
                // photoSmall={this.props.product.photos.small}
                // photoLarge={this.props.product.photos.large}
                url={this.props.location.pathname}
                productCover={this.props.productCover}
                urlLong={this.props.longUrl}
                reviews={this.props}
                descriptionBoxSwitch={this.props.match.params.Parameters}
                mutateState={this.props.mutateState}
                setProductCover={this.props.setProductCover}
                isOpenFullImage={this.props.isOpenFullImage }
                setIsOpenFullImage={this.props.setIsOpenFullImage}
                reviews={this.props.reviews}
                answers={this.props.answers}
                getAnswers={this.getAnswers}
                questions={this.props.questions}
                myRef={this.myRef}
                scrollToMyRef={this.scrollToMyRef}
                fullPhoto={this.props.fullPhoto}
                isScrollImage={this.props.isScrollImage}
                myRefIMG={this.myRefIMG}
                scrollToImgBoxRight={this.scrollToImgBoxRight}
                scrollToImgBoxLeft={this.scrollToImgBoxLeft}
                scrollPosition={this.props.scrollPosition}
                raitingSubmit={this.raitingSubmit}
            /> : 's'}
           
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
        setIsOpenFullImage: state.Product.setIsOpenFullImage,
        reviews: state.Product.reviews,
        answers: state.Product.answers,
        isLoadAnswer: state.Product.isLoadAnswer,
        questions: state.Product.questions,
        fullPhoto: state.Product.fullPhoto,
        scrollPosition: state.Product.scrollPosition
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product, id) => {
            dispatch(setProductActionCreator(product, id));
        }, 
        setSpecifications: (specifications) => {
            dispatch(setSpecificationsItemProductAC(specifications));
        },
        setLongUrl: (long) => {
            dispatch(setLongUrlActionCreator(long));
        },
        setItemObj: (obj) => {
            dispatch(setitemProductObjActionCreator(obj));
        },
        setProductCover: (url) => {
            dispatch(setItemProductCoverAC(url));
        },
        setIsOpenFullImage: (fullPhoto = ' ') => {
            dispatch(isOpenFullImageAC(fullPhoto));
        },
        setReviews: (reviews) => {
            dispatch(setReviewsAC(reviews));
        },
        setReviewsAnswer: (answers) => {
            dispatch(setReviewsAnswerAC(answers))
        },
        setIsVisible: (id) => {
            dispatch(setIsVisibleAC(id));
        },
        setQuestions: (questions) => {
            dispatch(setQuestionsAC(questions));
        },
        isOpenRegistrationModal: (booleanType = ' ') => {
            dispatch(isOpenRegistrationModalAC(booleanType));
        },
        addToCart: (product) => {
            dispatch(addToCartAC(product));
        },
        isOpenCartModal: (booleanType = ' ') => {
            dispatch(isOpenCartModalAC(booleanType));
        },
        isScrollImage: (boolean = null, defNum = 0) => {
            dispatch(isScrollImageAC(boolean, defNum));
        }
    }
}

let WithUrlDataContainerComponent = withRouter(itemProductContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent);