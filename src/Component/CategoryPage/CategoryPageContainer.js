import React from 'react';
import F from './CategoryPageContainer.module.css';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import {quickSort, changeProducts} from '../redux/Project-reducer';
import {setFlowersActionCreator, setCountFlowersActionCreator, changeCurrentValueActionCreator, setPageNameActionCreator, setCoverPageActionCreator, setSpecificationlistActionCreator} from '../redux/Flowers-reducer';
import { withRouter } from 'react-router-dom';


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
        let specificationList = [
            {id: 1, name: 'Диаметр'},
            {id: 2, name: 'Цвет'},
            {id: 4, name: 'Узор'}
        ]
        this.props.setSpecificationList(specificationList); //Сэтаем наши характеристики

        let arr = [ //Сэтаем товары
            {id: 1, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 2, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 3, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 4, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 5, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [3]},
            {id: 6, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 7, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [3]},
            {id: 8, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [4]},
            {id: 9, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [5]},
            {id: 10, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [5]},
            {id: 11, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [8]},
            {id: 12, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [6]},
            {id: 13, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [23]},
            {id: 14, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [7]},
            {id: 15, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [6]},
            {id: 16, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 17, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 18, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 19, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
            {id: 20, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]}    
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
                {id: 1, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 3, 5, 7, 2]},
                {id: 2, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1]},
                {id: 3, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1]},
                {id: 4, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1]},
                {id: 5, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [3]},
                {id: 6, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
                {id: 7, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [3]},
                {id: 8, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [4]},
                {id: 9, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [5]},
                {id: 10, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [5]},
                {id: 11, name: 'Цветок такой то', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 12, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [8]},
                {id: 12, name: 'Я цветок', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 7, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [6]},
                {id: 13, name: 'Цветочеггг', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [2]},
                {id: 14, name: 'Ромашка', price: '333', photo: {smal: 'url1', large: 'url2'}, orders: 18, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [7]},
                {id: 15, name: 'Роза', price: '2222', photo: {smal: 'url1', large: 'url2'}, orders: 2, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [6]},
                {id: 16, name: 'Пантилея', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 1, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1, 2]},
                {id: 17, name: 'Название', price: '21', photo: {smal: 'url1', large: 'url2'}, orders: 16, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1]},
                {id: 18, name: 'ААВВВВВВВВ', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1]},
                {id: 19, name: 'Борн', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 4, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1]},
                {id: 20, name: 'Эритрема', price: '2380', photo: {smal: 'url1', large: 'url2'}, orders: 6, preDescriptions: 'Бла-1', description: 'Бла-2', homePaymant: 'True', catId: [1]}            ];
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
          let specificationForm = this.props.specificationList.map( f => 
            <div className={F.blockFiltersElement}><span>{f.name}</span> <input type='text' value=''></input></div>
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
                        <form>{specificationForm}</form>
                        <input type='button' value='применить'></input>
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

