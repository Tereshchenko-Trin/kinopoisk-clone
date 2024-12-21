import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilms, requestFilmsSearch, requestFilterFilms } from '@/services/films'

const initialState = {
  list: [],
  searchList: [],
  filterList: [],
  pageCount: null,
  isLoaded: false,
  error: null,
  filterData: null,
}

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilms({ page, ...params })

  console.log(data.items)
  return data
})

export const fetchFilmsSearch = createAsyncThunk('films/fetchFilmsSearch', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilmsSearch({ page, ...params })

  console.log(data.films)
  return data
})

export const fetchFilterFilms = createAsyncThunk('films/fetchFilterFilms', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilterFilms({ page, ...params })

	console.log(data.items)
	console.log(page, params)
  return data
})

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilterFormData: (state, action) => {
      state.filterData = action.payload
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoaded = false
        state.list = action.payload.items
        state.pageCount = action.payload.totalPages
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
        state.pageCount = action.payload.pagesCount

        console.log(action.payload)
      })
      .addCase(fetchFilmsSearch.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchFilterFilms.pending, (state) => {
				state.isLoaded = true
				state.error = null
			})
			.addCase(fetchFilterFilms.fulfilled, (state, action) => {
				state.isLoaded = false
				state.filterList = action.payload.items
        state.pageCount = action.payload.totalPages
        console.log(action.payload)
			})
			.addCase(fetchFilterFilms.rejected, (state, action) => {
				state.isLoaded = false
				state.error = action.error.message
			})
  }
})

export const { setFilterFormData } = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer