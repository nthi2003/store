
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice'; 
import categoryReducer from './categorySlice'
const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,

});

export default rootReducer;
