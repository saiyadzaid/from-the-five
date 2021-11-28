/** @format */

import { combineReducers } from 'redux';
import categoriesReducer from '../services/category/categories.reducer';
import colorsReducer from '../services/color/color.reducer';
import productsReducer from '../services/product/product.reducer';
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  colors: colorsReducer
});
export default rootReducer;
