import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilm } from '@/services/film'

const initialState = {
  data: {},
  isLoaded: false,
  error: null
}

export const fetchFilm = createAsyncThunk('film/fetchFilm', async (kinopoiskId, { rejectWithValue }) => {
  const data = await requestFilm(kinopoiskId)
  console.log(data)

  if (data.hasError) {
    return (rejectWithValue(data))
  }

  console.log(data)
  return data
})

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.isLoaded = false
        state.data = action.payload
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })
  }
})

export const filmReducer = filmSlice.reducer