import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_GET_DATA } from '../apis/index';
import React, { useState } from 'react';

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todoList: [{ task: 'task1', id: 'tes32' }],
    token: 'token22',
  },
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
