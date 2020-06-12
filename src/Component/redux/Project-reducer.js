const MUTATE_STATE = 'MUTATE_STATE';
const ADD_WAY_LINK = 'ADD_WAY_LINK';

let initialState = {
    mutateState: false,
    wayLinks: [{name: '', url: ''}]
}

const ProjectReducer = (state = initialState, action) => {
    switch(action.type) {
        case MUTATE_STATE:
     
            return {
                ...state,
                mutateState: state.mutateState ? false : true
            }
            case ADD_WAY_LINK: 
                let copyState = {...state};
                copyState.mutateState = state.mutateState ? false : true;
                copyState.wayLinks.push({url: action.url, name: action.name});
                return copyState;
            default: return state;
    }
}

export let changeProducts = (array, param, ourArr = []) => {  //Функция выборки из массива
// Только тех объектов у которых свойство catId равно передаваемомму параметру param
  for(let i = 0; i < array.length; i++ ) {
      for(let z = 0; array[i].catId[z] == param || array[i].catId.length > z+1; z++) {
        if(array[i].catId[z] == param) {
          ourArr.push(array[i]);
        } 
        
      }
   
  } return ourArr;
}

export const quickSort = (array, prop) => { //Функция сортировки массива по параметру prop
    if (array.length <= 1) { // так понятнее
      return array;
    } else {
     
      let pivotIndex = Math.floor(array.length / 2); // так понятнее
      let pivot = array[pivotIndex];
      let less = [];
      let greater = []; // не объявляйте переменные через запятую
  
      for (let i = 0; i < array.length; i++) { // индексы элементов в массиве идут с нуля
        if (i === pivotIndex) continue; // опорный элмент нужно пропускать
        if (array[i][prop] >= pivot[prop]) {
          less.push(array[i]);
        } else {
          greater.push(array[i]);
        }
      }
      let result = [];
      
      return result.concat(quickSort(less, prop), pivot, quickSort(greater, prop));
    }
}

export let wayLinkActionCreator = (url, name) => {
    return {
      type: ADD_WAY_LINK,
      url: url,
      name: name
    }
}

export let mutateStateActionCreator = () => {
    return {
        type: MUTATE_STATE
        }
}

export default ProjectReducer;