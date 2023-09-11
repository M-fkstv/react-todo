import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add(state, action) {
      state.push({
        text: action.payload.text,
        id: new Date().toISOString(),
        completed: false,
      })
    },
    remove(state, action) {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    toggled(state, action) {
      const toggled = state.find(todo => todo.id === action.payload.id);
      toggled.completed = !toggled.completed;
    },
    update(state, action) {

    },
  }

});

export const { add, remove,toggled, update } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;