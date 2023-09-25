import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import React, { useState } from 'react';
const store = configureStore({
  reducer: {
    todoSlice,
  },
});

export default store;
