import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import recommendedReducer from "./recommended/recommendedSlice";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  recommended: recommendedReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
