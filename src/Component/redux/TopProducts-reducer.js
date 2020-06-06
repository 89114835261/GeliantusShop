const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_COUNT_PRODUCTS = 'SET_COUNT_PRODUCTS';

let initialState = {
    products: [],
    countProducts: null
}

const TopProducts = (state = initialState, action) => {

    switch(action.type) {
        case SET_PRODUCTS: 
            return {
                ...state,
                products: action.products
            }
        case SET_COUNT_PRODUCTS:
            return {
              ...state,
              countProducts: action.count
            }
        default: return state;
    }
}

export const quickSort = (array, prop) => {
    if (array.length <= 1) { // так понятнее
      
      return array;
    } else {
     
      let pivotIndex = Math.floor(array.length / 2); // так понятнее
      let pivot = array[pivotIndex];
      let less = [];
      let greater = []; // не объявляйте переменные через запятую
  
      for (let i = 0; i < array.length; i++) { // индексы элементов в массиве идут с нуля
        if (i === pivotIndex) continue; // опорный элмент нужно пропускать
        if (array[i][prop] <= pivot[prop]) {
          less.push(array[i]);
        } else {
          greater.push(array[i]);
        }
      }
      let result = [];
      
      return result.concat(quickSort(less, prop), pivot, quickSort(greater, prop));
    }
}

export let setProductsActionCreator = (products) => {
    return {
        type: SET_PRODUCTS,
        products: products
    }
}

export let setCountProductsActionCreator = (count) => {
  return {
    type: SET_COUNT_PRODUCTS,
    count: count
  }
}

export default TopProducts;