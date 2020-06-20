import React from 'react';
import F from './CategoryPageContainer.module.css';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import {quickSort, changeProducts, setChildsCat} from '../redux/Project-reducer';
import {setFlowersActionCreator, setCountFlowersActionCreator, changeCurrentValueActionCreator, setPageNameActionCreator, setCoverPageActionCreator, setSpecificationlistActionCreator, setItemCategoryAC, setChildCategoryAC} from '../redux/Flowers-reducer';
import { withRouter } from 'react-router-dom';
import FiltersForm from './FiltersForm/FiltersForm';
import ChildCategoryBlockContainer from './ChildCategory/ChildCategoryBlock';
import Axios from 'axios';


class Flowers extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }

    componentDidMount() {
        let mutate = this.props.mutateState;

        //Получаем категории типа с сервера
        let catList = [ //Получаем категории
            {catId: 1, name: 'Цветы', cover: 'url-image1', get url() {return `/Category/Category-Cvety/${this.catId}`}, specification: [1, 2, 4], childs: [2,3]}, 
            {catId: 2, name: 'Товары для дома', cover: 'url-image2', get url() { return `/Category/Category-Tovary-Dlya-Doma/${this.catId}`}, specification: [1, 2, 4], childs: [3]},
            {catId: 3, name: 'Декор', cover: 'url-image3', get url() { return `/Category/Category-Dekor/${this.catId}`}, specification: [1, 2, 4], childs: [3]}
        ] 

        
        let setCat = catList.filter(currentElement => currentElement.catId == this.props.match.params.catId);
        let itCat = setCat[0];
        this.props.setPageName(setCat[0].name);
        this.props.setCoverPage(setCat[0].cover);
        
       
        this.props.setItemCategory(setCat[0]);

               
        //Ниже имитация вызова детей-категорий основной категории(их id берутся из свойство childs основной категории)
        this.props.setChildsCategory(setChildsCat(itCat, catList, 'childs', 'catId'))

        let specificationIdList = setCat[0].specification.join('-') // result 1-2-4
        let childCategoryList = setCat[0].childs.join('-') //result 2, 3 
        //Далее по задумке делаем запрос, /Specifications?id=2_5_8 и в в ответе
        //должны прити характеристики с id 2, 5, 8
        // Тоже самое с childs(дочерними категориями)
        //Имитация результата вызова /Specifications?id=2_5_8 ниже:
        // this.props.setSpecificationList(specificationList); //Сэтаем наши характеристики
        Axios.get('/Products.json').then(response => {this.props.setFlowers(changeProducts(response.data.items, this.props.match.params.catId))});
        this.mutate = this.props.mutateState;

        //Отбираем только те объекты, которые равны текущему id страницы (catId)  ниже:
        // this.props.setFlowers(changeProducts(arr, this.props.match.params.catId)); 
         this.props.setCountFlowers(15) //Сэтаем кол-во товаров на странице
        
    }
 
    componentDidUpdate() {  
        
        if(this.mutate != this.props.mutateState) {
            let catList = [ //Получаем категории
                {catId: 1, name: 'Цветы', cover: 'url-image1', get url() {return `/Category/Category-Cvety/${this.catId}`}, specification: [1, 2, 4], childs: [2,3]}, 
                {catId: 2, name: 'Товары для дома', cover: 'url-image2', get url() { return `/Category/Category-Tovary-Dlya-Doma/${this.catId}`}, specification: [1, 2, 4], childs: [3]},
                {catId: 3, name: 'Декор', cover: 'url-image3', get url() { return `/Category/Category-Dekor/${this.catId}`}, specification: [1, 2, 4], childs: [3]}
            ] 
           
            let setCat = catList.filter(currentElement => currentElement.catId == this.props.match.params.catId);
            let itCat = setCat[0];
            this.props.setPageName(setCat[0].name);
            this.props.setCoverPage(setCat[0].cover)

            this.props.setChildsCategory(setChildsCat(itCat, catList, 'childs', 'catId'))
            Axios.get('/Products.json').then(response => {this.props.setFlowers(changeProducts(response.data.items, this.props.match.params.catId))});
       
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
                raiting={s.raiting}
                img={s.photo}
                url={this.props.location.pathname}
                
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
                        <FiltersForm/>
                        
                    </div>

                </div>
                {this.props.childCategory.length != 0 && this.props.mainUrl ? <ChildCategoryBlockContainer mainUrl={this.props.mainUrl} childCategory={this.props.childCategory} /> : null}
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
        coverPage: state.Flowers.coverPage,
        itemCategory: state.Flowers.itemCategory,
        childCategory: state.Flowers.childCategory,
        mainUrl: state.Project.mainUrl
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
      },
      setItemCategory: (catogory) => {
          dispatch(setItemCategoryAC(catogory))
      },
      setChildsCategory: (childs) => {
          dispatch(setChildCategoryAC(childs))
      }
    }
}

let withRouteUrlFlowers = withRouter(Flowers)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteUrlFlowers);

