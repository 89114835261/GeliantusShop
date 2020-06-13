import { createStore, combineReducers } from "redux";
import HeaderMenuReducer from './HeaderMenuReducer';
import TopProducts from './TopProducts-reducer';
import apps from './App-reducer';
import Product from './Product-reducer';
import TopFlowers from './TopFlowers-reducer';
import TopDecors from './TopDecors-reduser';
import Flowers from './Flowers-reducer';
import ProjectReducer from './Project-reducer';
import FiltersForm from './FiltersForm-reducer';
import { reducer as formReducer } from 'redux-form';
import Main from './Main-reducer';
import NavBar from './NavBar-reducer';

let bunchReducers = combineReducers(
    {
        Project: ProjectReducer,
        HeaderMenu: HeaderMenuReducer,
        AppPage: apps,
        TopProducts: TopProducts,
        TopFlowers: TopFlowers,
        TopDecors: TopDecors,
        Flowers: Flowers,
        Product: Product,
        FiltersForm: FiltersForm,
        Main: Main,
        NavBar: NavBar,
        form: formReducer
    }

);

let store = createStore(bunchReducers);

window.store = store;

export default store;