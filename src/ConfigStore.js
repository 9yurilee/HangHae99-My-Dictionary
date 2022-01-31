import {createStore, combineReducers} from "redux";
import Store from "./Store"

const rootReducer = combineReducers({Store});

const myStore = createStore(rootReducer);

export default myStore;