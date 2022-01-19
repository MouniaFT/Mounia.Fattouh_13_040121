import { createAsyncThunk } from '@reduxjs/toolkit'

export const getUser = createAsyncThunk(
  'user/getUser',
  async ({ token }, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      if (res.status === 200) {
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      console.log(e.res.data)
      return thunkAPI.rejectWithValue(e.res.data)
    }
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ firstName, lastName, token }, thunkAPI) => {
    console.log(firstName, lastName)
    try {
      const res = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      })
      const data = await res.json()
      if (res.status === 200) {
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      console.log(e.res.data)
      return thunkAPI.rejectWithValue(e.res.data)
    }
  }
)
