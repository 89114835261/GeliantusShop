import React from 'react';
import F from './CategoryPageContainer.module.css';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import {quickSort, changeProducts} from '../redux/Project-reducer';
import {setFlowersActionCreator, setCountFlowersActionCreator, changeCurrentValueActionCreator, setPageNameActionCreator, setCoverPageActionCreator, setSpecificationlistActionCreator} from '../redux/Flowers-reducer';
import { withRouter } from 'react-router-dom';
import FiltersForm from './FiltersForm/FiltersForm';


class Flowers extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }

    componentDidMount() {
        let mutate = this.props.mutateState;




        //Получаем категории типа с сервера
        let catList = [ //Получаем категории
            {catId: 1, name: 'Цветы', cover: 'url-image1', get url() {return `/Category/Cvety/${this.catId}`}, specification: [1, 2, 4] }, 
            {catId: 2, name: 'Товары для дома', cover: 'url-image2', get url() { return `/Category/TovaryDlyaDoma/${this.catId}`}, specification: [1, 2, 4]},
            {catId: 3, name: 'Декор', cover: 'url-image3', get url() { return `/Category/Decor/${this.catId}`}, specification: [1, 2, 4]}
        ] 
       
        
        let setCat = catList.filter(currentElement => currentElement.catId == this.props.match.params.catId);
        this.props.setPageName(setCat[0].name);
        this.props.setCoverPage(setCat[0].cover)

        let specificationIdList = setCat[0].specification.join('_') // result 1_2_4
        //Далее по задумке делаем запрос, /Specifications?id=2_5_8 и в в ответе
        //должны прити характеристики с id 2, 5, 8

        //Имитация результата вызова /Specifications?id=2_5_8 ниже:

        // this.props.setSpecificationList(specificationList); //Сэтаем наши характеристики

        let arr = [ //Сэтаем товары
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
        ];
        
        //Отбираем только те объекты, которые равны текущему id страницы (catId)  ниже:
        this.props.setFlowers(changeProducts(arr, this.props.match.params.catId)); 
         this.props.setCountFlowers(15) //Сэтаем кол-во товаров на странице
        
    }
 
    componentDidUpdate() {
        
        if(this.mutate != this.props.mutateState) {
            let catList = [ //Получаем категории
                {catId: 1, name: 'Цветы', cover: 'url-image1', get url() {return `/Category/Cvety/${this.catId}`}, specification: [1, 2, 4] }, 
                {catId: 2, name: 'Товары для дома', cover: 'url-image2', get url() { return `/Category/TovaryDlyaDoma/${this.catId}`}, specification: [1, 2, 4]},
                {catId: 3, name: 'Декор', cover: 'url-image3', get url() { return `/Category/Decor/${this.catId}`}, specification: [1, 2, 4]}
            ] 
           
            let setCat = catList.filter(currentElement => currentElement.catId == this.props.match.params.catId);
            this.props.setPageName(setCat[0].name);
            this.props.setCoverPage(setCat[0].cover)
            let arr = [ //Сэтаем товары
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
            ];
            this.props.setFlowers(changeProducts(arr, this.props.match.params.catId));
            this.mutate = this.props.mutateState;
        }
    }

    render() {
        
        let changeOption = React.createRef();
        let func = () => {
            this.props.changeCurrentValue(changeOption.current.options.selectedIndex + 1)
        }
        let sortProducts = quickSort(this.props.flowers, 'id'); // функция сортирующая массив
        if(this.props.currentValue == 1) {
            sortProducts.reverse();
        }
        let endProductList = sortProducts.map( s =>
            <Product 
                name={s.name}
                price={s.price}
                orders={s.orders}
                id={s.id}
            />
          );

        return(
            <div className={F.wrapper}>
                <div className={F.topBoxWrapper}>
                   
                    <div className={F.nameBox}>
                        <h1>{this.props.pageName}</h1>
                        <img src={this.props.coverPage}></img>
                        {this.props.coverPage}
                        <div className={F.filters}>
                           <p>Сортировать</p> 

                                <select ref={changeOption} value={this.props.currentValue} name='sdsd' onChange={ () => func()} >
                                    <option value='1'>Возрастанию цены</option>
                                    <option value='2'>Убыванию цены</option>
                                </select>
                            
                        </div>
                    </div>

                    <div className={F.filtersBox}>
                        <h1>Настроить фильтры</h1>
                        <FiltersForm />
                        
                    </div>

                </div>
                <div className={F.productsLits}>
                
                {endProductList}

                </div>
        </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        flowers: state.Flowers.flowers,
        countFlowers: state.Flowers.countFlowers,
        specificationList: state.Flowers.specificationList,
        mutateState: state.Project.mutateState,
        currentValue: state.Flowers.currentValue,
        pageName: state.Flowers.pageName,
        coverPage: state.Flowers.coverPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setFlowers: (flowers) => {
        dispatch(setFlowersActionCreator(flowers))
      },
      setCountFlowers: (count) => {
          dispatch(setCountFlowersActionCreator(count))
      },
      changeCurrentValue: (value) => {
          dispatch(changeCurrentValueActionCreator(value))
      },
      setPageName: (name) => {
          dispatch(setPageNameActionCreator(name))
      },
      setCoverPage: (url) => {
          dispatch(setCoverPageActionCreator(url))
      },
      setSpecificationList: (specificationList) => {
          dispatch(setSpecificationlistActionCreator(specificationList))
      }
    }
}

let withRouteUrlFlowers = withRouter(Flowers)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteUrlFlowers);

