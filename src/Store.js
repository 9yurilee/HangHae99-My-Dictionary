import { createStore } from 'redux';

const word = document.getElementById('word');
const announce = document.getElementById('announce');
const meaning = document.getElementById('meaning');
const example = document.getElementById('example');

// Actions
const CREATE = 'Creacte/CREATE';

const initialState = {
  list: [
    { id: 1, word: '단어', announce: '발음', meaning: '의미', example: '예문' },
    {
      id: 2,
      word: '단어2',
      announce: '발음2',
      meaning: '의미2',
      example: '예문2',
    },
  ],
};

// Action Creators
export function createCard(card) {
  return { type: CREATE, card };
  //card는 추가할 값??
}

// Reducer
const myReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE: {
      const new_list = [...state.list, action.card];
      console.log('hihi');
      //3-9 17:55 <action.card>
      return { list: new_list };
    }
    default:
      return state;
  }
};

const myStore = createStore(myReducer);

export default myStore;

// const onAdd = e => {
//   e.preventDefault();
//   const Add = input.value;
//   input.value = "";
//   mystore.dispatch({ type: ADD });
// };

// form.addEventListener("submit", onSubmit);
