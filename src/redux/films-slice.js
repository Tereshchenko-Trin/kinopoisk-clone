import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  isLoaded: false,
  error: null,
  limit: 10,
  pageCount: null,
  // ordering: ''
}

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {

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
        state.list = action.payload.results
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })
  }
})

// export const {} = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer