import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import userReducer from '../features/user/userSlice'

//creation of the store
export const store = configureStore({
  reducer: {
    loginReducer,
    userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
