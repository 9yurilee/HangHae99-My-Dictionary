import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore"

const initialState = {
  list: [{ word: '단어', meaning: '의미', example: '예문', checked: false }]};

// Actions
const CREATE = 'store/CREATE';
const LOAD = 'store/LOAD';


// Action Creators
export function createCard(card) {
  return { type: CREATE, card };
  //card = { card: card } 
}

export function loadCard(card_list) {
  return { type: LOAD, card_list };
}

//middlewears
const middlewears = [thunk];
const enhancer = applyMiddleware(...middlewears);

export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "dict"))
    console.log(card_data);

    let empty_list = [];

    card_data.forEach((data_list)=> {
      // data_list = [...data_list, {...data_list.data()}] 밑에랑 같음
      empty_list.push({id:data_list.id, ...data_list.data()})
    })
    dispatch(loadCard(empty_list));
  }
}

export const createCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dict"), card);
    const _card = await getDoc(docRef);
    const card_data = {id: _card.id, ..._card.data()}
    dispatch(createCard(card_data));
  }
};

// Reducer
const myReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD: {
      return {list: action.card_list};
    }
    // 중복돼서 나타나는 원인!
    // case CREATE: {
    //   const new_list = [...state.list, action.card];
    //   //3-9 17:55 <action.card>
    //   return { list: new_list };
    // }
    default:
      return state;
  }
};

const myStore = createStore(myReducer, enhancer);

export default myStore;