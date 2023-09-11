import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo.slice";


const rootReducer = combineReducers({
  todos:todoReducer,
})
export const store = configureStore({
  reducer: rootReducer,
})