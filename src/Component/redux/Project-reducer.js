const MUTATE_STATE = 'MUTATE_STATE';

let initialState = {
    mutateState: false
}

const ProjectReducer = (state = initialState, action) => {
    switch(action.type) {
        case MUTATE_STATE:
          
            return {
                ...state,
                mutateState: state.mutateState ? false : true
            }
        default: return state;
    }
}

export let changeProducts = (array, param, ourArr = []) => { 
            
  for(let i = 0; i < array.length; i++ ) {
      if(array[i].catId == param) {
          ourArr.push(array[i]);
      } 
  } return ourArr;
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

export let mutateStateActionCreator = () => {
    return {
        type: MUTATE_STATE
        }
}

export default ProjectReducer;