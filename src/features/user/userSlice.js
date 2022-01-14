import { createSlice } from '@reduxjs/toolkit'
import { getUser } from './fetchRequest'

const initialState = {
  firstName: '',
  lastName: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.firstName = payload.body.firstName
      state.lastName = payload.body.lastName
    })
  },
})

export const userSelector = (state) => state.user

export default userSlice.reducer
