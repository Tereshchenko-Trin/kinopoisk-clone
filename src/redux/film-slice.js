import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilm, requestFilmStaff, requestFilmBoxOffice } from '@/services/film'

const initialState = {
  data: null,
  staffList: [],
  boxOffice: [],
  isLoaded: false,
  error: null
}

export const fetchFilm = createAsyncThunk('film/fetchFilm', async (kinopoiskId, { rejectWithValue }) => {
  const data = await requestFilm(kinopoiskId)

  if (data.hasError) {
    return (rejectWithValue(data))
  }

  return data
})

export const fetchFilmStaff = createAsyncThunk('film/fetchFilmStaff', async (filmId = {}, { rejectWithValue }) => {
  const data = await requestFilmStaff({ filmId })

  if (data.hasError) {
    return (rejectWithValue(data))
  }

  return data
})

export const fetchFilmBoxOffice = createAsyncThunk('film/fetchFilmBoxOffice', async (kinopoiskId, { rejectWithValue }) => {
  const data = await requestFilmBoxOffice(kinopoiskId)

  if (data.hasError) {
    return (rejectWithValue(data))
  }

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

      .addCase(fetchFilmStaff.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilmStaff.fulfilled, (state, action) => {
        state.isLoaded = false
        state.staffList = action.payload
      })
      .addCase(fetchFilmStaff.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchFilmBoxOffice.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilmBoxOffice.fulfilled, (state, action) => {
        state.isLoaded = false
        state.boxOffice = action.payload.items
      })
      .addCase(fetchFilmBoxOffice.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })
  }
})

export const filmReducer = filmSlice.reducer