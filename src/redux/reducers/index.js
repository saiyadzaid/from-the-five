/** @format */

import { combineReducers } from 'redux';
import categoriesReducer from '../services/category/categories.reducer';
import productsReducer from '../services/product/product.reducer';
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
});
export default rootReducer;
