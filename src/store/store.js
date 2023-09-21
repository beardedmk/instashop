// store.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import allProductsReducer from "./allProductsSlice";
import productsCategoriesSliceReducer from "./productsCategoriesSlice";
import cartSliceReducer from "./cartSlice";
import userSliceReducer from "./userSlice";

const productRootReducer = combineReducers({
  productReducer,
  allProductsReducer,
  productsCategoriesSliceReducer,
});

const store = configureStore({
  reducer: {
    productStore: productRootReducer,
    cartStore: cartSliceReducer,
    userStore: userSliceReducer,
  },
});

export default store;
