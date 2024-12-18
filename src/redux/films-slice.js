import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilms, requestFilmsSearch } from '@/services/films'

const initialState = {
  list: [],
  searchList: [],
  isLoaded: false,
  error: null,
  limit: 20,
  pageCount: null,
}

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (params = {}, { getState }) => {
  const limit = getState().films.limit
  const data = await requestFilms({ limit, ...params})

  console.log(data.items)
  return data
})

export const fetchFilmsSearch = createAsyncThunk('films/fetchFilmsSearch', async (params = {}, { getState }) => {
  const limit = getState().films.limit
  const data = await requestFilmsSearch({ limit, ...params})

  console.log(data.films)
  return data
})

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoaded = false
        state.list = action.payload.items
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchFilmsSearch.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilmsSearch.fulfilled, (state, action) => {
        state.isLoaded = false
        state.searchList = action.payload.films
      })
      .addCase(fetchFilmsSearch.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })
  }
})

// export const {} = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer