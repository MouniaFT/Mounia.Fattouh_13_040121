import { createAsyncThunk } from '@reduxjs/toolkit'

export const getLogin = createAsyncThunk(
  'login/getLogin',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
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
