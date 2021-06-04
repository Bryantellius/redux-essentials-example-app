import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'Ben Bryant' },
  { id: 2, name: 'Cruz Sanchez' },
  { id: 3, name: 'Michael Doyle' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
