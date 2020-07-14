import { createStore, combineReducers } from "redux";
import HeaderMenuReducer from './HeaderMenuReducer';
import TopProducts from './TopProducts-reducer';
import apps from './App-reducer';
import Product from './Product-reducer';
import Flowers from './Flowers-reducer';
import ProjectReducer from './Project-reducer';
import FiltersForm from './FiltersForm-reducer';
import { reducer as formReducer } from 'redux-form';
import Main from './Main-reducer';
import NavBar from './NavBar-reducer';
import CartReducer from './Cart-reducer';
import FindReducer from './Find-reducer';
import MobileReducer from './Mobile-reducer';
import CurrentOffersReducer from './CurrentOffers-reducer';

let bunchReducers = combineReducers(
    {
        Project: ProjectReducer,
        HeaderMenu: HeaderMenuReducer,
        AppPage: apps,
        TopProducts,
        Flowers,
        Product,
        FiltersForm,
        Main,
        NavBar,
        CartReducer,
        FindReducer,
        MobileReducer,
        CurrentOffersReducer,
        form: formReducer
    }

);

let store = createStore(bunchReducers);

window.store = store;

export default store;