
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice'; 
import categoryReducer from './categorySlice'
import productReducer from './productSlice'
import posterReducer from './posterSlice'
const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product : productReducer,
  poster : posterReducer

});

export default rootReducer;
