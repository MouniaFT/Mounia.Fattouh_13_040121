import { createSlice } from '@reduxjs/toolkit'
import { getLogin } from './fetchRequest'

const initialState = {
  isLogin: false,
  isError: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state) => {
      state.isLogin = true
    })
    builder.addCase(getLogin.rejected, (state) => {
      state.isLogin = false
      state.isError = true
    })
  },
})

export const loginSelector = (state) => state.login

export default loginSlice.reducer
