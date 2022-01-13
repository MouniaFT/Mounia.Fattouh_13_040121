import { createSlice } from '@reduxjs/toolkit'
import { getLogin } from './fetchRequest'

const initialState = {
  isLogin: false,
  isError: false,
  token: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getLoginOut: (state) => {
      return (state = initialState)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state, { payload }) => {
      state.isLogin = true
      state.token = payload.body.token
    })
    builder.addCase(getLogin.rejected, (state) => {
      state.isLogin = false
      state.isError = true
    })
  },
})

export const loginSelector = (state) => state.login

export const { getLoginOut } = loginSlice.actions

export default loginSlice.reducer
