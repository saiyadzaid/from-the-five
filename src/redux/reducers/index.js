/** @format */

import { combineReducers } from 'redux';
import categoriesReducer from '../services/category/categories.reducer';
import colorsReducer from '../services/color/color.reducer';
import productsReducer from '../services/product/product.reducer';
import cartReducer from '../services/cart/cart.reducer';
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  colors: colorsReducer,
  cart: cartReducer
});
export default rootReducer;
