// rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import ProductSlice from '../slices/ProductSlice';
import ContactSlice from '../slices/ContactSlice';
const RootReducer = combineReducers({
  slice1: ProductSlice,
  slice2: ContactSlice,
});

export default RootReducer;
