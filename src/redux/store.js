import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./cartReducer";
import booksReducer from "./booksReducer"
import thunkMiddleware from "redux-thunk";
import filterReducer from "./filterReducer";




const reducers = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  filter: filterReducer
 
});

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
  );
  export default store;
  