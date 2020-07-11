const MUTATE_STATE = 'MUTATE_STATE';
const ADD_WAY_LINK = 'ADD_WAY_LINK';
const SET_MAIN_URL_ADRESS = 'SET_MAIN_URL_ADRESS';

let initialState = {
    mutateState: false,
    wayLinks: [{name: '', url: ''}],
    mainUrl: null
}

const ProjectReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MAIN_URL_ADRESS: 
            return {
              ...state,
              mainUrl: action.url
            }
        case MUTATE_STATE:
            return {
                ...state,
                mutateState: state.mutateState ? false : true
            }
        case ADD_WAY_LINK: 
                return state;
        default: return state;
    }
}

export let setMainUrlAC = (url) => {
  return {
    type: SET_MAIN_URL_ADRESS,
    url: url
  }
}

//Ниже функция сравнения для выборки 
//Например у главной категории(obj) есть подкатегории(arr2)
//Подкатегории имеют id, а главная категория
//имеет своство childs, которое является массивом и содержит набор цифр
//Данная функция позволит получить все объекты из массива arr2 у которых
//id совпадает с перечисленными в свойстве childs цифрами
export let setChildsCat = (obj, arr2, prop1, prop2) => {

  let itemArr = [];
  for(let i = 0; i < obj[prop1].length; i++) {
      for(let z = 0; z < (arr2.length); z++) {
          if(obj[prop1][i] == arr2[z][prop2]) {
              itemArr.push(arr2[z]);
          }
      }
  }
  return itemArr;
}

//Функция ниже вернёт true если в path слово начиная от 2 слэша(/) с конца ровно text
export let isCategory = (path, text) => {
  if(!path) return;
  let w = path.slice(0, path.lastIndexOf('/'));
  let t = w.lastIndexOf('/') + 1;
  let d = path.slice(t, t + 11);
  if(d == text) {
    return true;
  } else return false;
}

export let translitText = (text, language, sliceCount) => {
    if(!text) return;
    let translitText = '';
    let newText = text.slice(sliceCount, text.length)
    let sampleText = [
      {en: '-', ru: ' ', id: '1'},
      {en: '-', ru: ' ', id: '2'},
      {en: '/', ru: '/', id: '3'},
      {en: 'a', ru: 'а', id: '4'},
      {en: 'A', ru: 'А', id: '5'},
      {en: 'b', ru: 'б', id: '6'},
      {en: 'B', ru: 'Б', id: '7'},
      {en: 'v', ru: 'в', id: '8'},
      {en: 'V', ru: 'В', id: '9'},
      {en: 'g', ru: 'г', id: '10'},
      {en: 'G', ru: 'Г', id: '11'},
      {en: 'd', ru: 'д', id: '12'},
      {en: 'D', ru: 'Д', id: '13'},
      {en: 'e', ru: 'е', id: '14'},
      {en: 'E', ru: 'Е', id: '15'},
      {en: 'e', ru: 'ё', id: '16'},
      {en: 'E', ru: 'Ё', id: '17'},
      {en: 'zh', ru: 'ж', id: '18'},
      {en: 'Zh', ru: 'Ж', id: '19'},
      {en: 'z', ru: 'з', id: '20'},
      {en: 'Z', ru: 'З', id: '21'},
      {en: 'i', ru: 'и', id: '22'},
      {en: 'I', ru: 'И', id: '23'},
      {en: 'j', ru: 'й', id: '24'},
      {en: 'J', ru: 'Й', id: '25'},
      {en: 'k', ru: 'к', id: '26'},
      {en: 'K', ru: 'К', id: '27'},
      {en: 'l', ru: 'л', id: '28'},
      {en: 'L', ru: 'Л', id: '29'},
      {en: 'm', ru: 'м', id: '30'},
      {en: 'M', ru: 'М', id: '31'},
      {en: 'n', ru: 'н', id: '32'},
      {en: 'N', ru: 'Н', id: '33'},
      {en: 'o', ru: 'о', id: '34'},
      {en: 'O', ru: 'О', id: '35'},
      {en: 'p', ru: 'п', id: '36'},
      {en: 'P', ru: 'П', id: '37'},
      {en: 'r', ru: 'р', id: '38'},
      {en: 'R', ru: 'Р', id: '39'},
      {en: 's', ru: 'с', id: '40'},
      {en: 'S', ru: 'С', id: '41'},
      {en: 't', ru: 'т', id: '42'},
      {en: 'T', ru: 'Т', id: '43'},
      {en: 'u', ru: 'у', id: '44'},
      {en: 'U', ru: 'У', id: '45'},
      {en: 'f', ru: 'ф', id: '46'},
      {en: 'F', ru: 'Ф', id: '47'},
      {en: 'kh', ru: 'х', id: '48'},
      {en: 'Kh', ru: 'Х', id: '49'},
      {en: 'c', ru: 'ц', id: '50'},
      {en: 'C', ru: 'Ц', id: '51'},
      {en: 'ch', ru: 'ч', id: '52'},
      {en: 'CH', ru: 'Ч', id: '53'},
      {en: 'sh', ru: 'ш', id: '54'},
      {en: 'SH', ru: 'Ш', id: '55'},
      {en: 'sch', ru: 'щ', id: '56'},
      {en: 'SCH', ru: 'Щ', id: '57'},
      {en: '', ru: 'ъ', id: '58'},
      {en: '', ru: 'Ъ', id: '59'},
      {en: 'y', ru: 'ы', id: '60'},
      {en: 'Y', ru: 'Ы', id: '61'},
      {en: '', ru: 'ь', id: '62'},
      {en: '', ru: 'Ь', id: '63'},
      {en: 'e', ru: 'э', id: '64'},
      {en: 'E', ru: 'Э', id: '65'},
      {en: 'u', ru: 'ю', id: '66'},
      {en: 'U', ru: 'Ю', id: '67'},
      {en: 'ya', ru: 'я', id: '68'},
      {en: 'Ya', ru: 'Я', id: '69'},
      {en: '-', ru: '-', id: '70'},
  ]
      let erorArr = [
        {erVal: 'ыа', val: 'я'},
      ]
      
      if(language == 'en') {
    for(let i = 0; i < newText.length; i++) {
        let result;
        let itemCharTwo = newText[i] + newText[i+1];
        let itemCharThree = newText[i] + newText[i+1] + newText[i+2];
       
        if(itemCharThree == 'SCH' || itemCharThree == 'sch') {
            result = sampleText.find(item => item.en == itemCharThree);
            translitText += result.ru;
            i += 2;
        } else if(itemCharTwo == 'kh' || itemCharTwo == 'Kh' || itemCharTwo == 'zh' || itemCharTwo == 'Zh' || itemCharTwo == 'ch' || itemCharTwo == 'CH' || itemCharTwo == 'sh' || itemCharTwo == 'SH' || itemCharTwo == 'Ya' || itemCharTwo == 'ya') {
          
          result = sampleText.find(item => item.en == itemCharTwo);
          translitText += result.ru;
          i++;
        } else { 
         
          result = sampleText.find(item => item.en == newText[i]);
          translitText += result.ru; }
    } 
  } else if(language == 'ru') {
    
      for(let i = 0; i < text.length; i++) {
       
        let result;
        result = sampleText.find(item => item.ru == text[i]);
        translitText += result.en; 
      } 
  }
      return translitText;
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

export const quickSort = (array, prop, boolean = false) => { //Функция сортировки массива по параметру prop
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
      
      return !boolean ? result.concat(quickSort(less, prop), pivot, quickSort(greater, prop))
      : result.concat(quickSort(less, prop), pivot, quickSort(greater, prop)).reverse();
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