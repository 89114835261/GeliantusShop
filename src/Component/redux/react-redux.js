import { createStore, combineReducers } from "redux";

let bunchReducers = combineReducers(
    {

    }
);

let store = createStore(bunchReducers);

window.store = store;

export default store;