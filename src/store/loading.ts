import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name:'loading',
  initialState:{
    isLoading: false,
  },
  reducers:{
    loadingStart(state){
      state.isLoading = true
    },
    loadingEnd(state){
      state.isLoading = false
    }
  }
})

export const {loadingStart,loadingEnd} =  loading.actions
export default loading.reducer