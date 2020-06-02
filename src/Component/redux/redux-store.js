import { createStore, combineReducers } from "redux";
import HeaderMenuReducer from "./HeaderMenuReducer";

let bunchReducers = combineReducers(
    {
        HeaderMenu: HeaderMenuReducer
    }
);

let store = createStore(bunchReducers);

window.store = store;

export default store;