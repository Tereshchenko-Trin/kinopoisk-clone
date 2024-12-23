import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
  requestFilms,
  requestFilmsNew, 
  requestFilmsSearch, 
  requestFilmsFilter 
} from '@/services/films'
import { normalizeFilms } from '@/utils/normalizeFilms'

const initialState = {
  homeList: [],
  topFilmsList: [],
  topSeriesList: [],
  trendsList: [],
  newList: [],
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

export const fetchTopFilms = createAsyncThunk('films/fetchTopFilms', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilms({ page, ...params })

  console.log(data.items)
  return data
})

export const fetchTopSeries = createAsyncThunk('films/fetchTopSeries', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilms({ page, ...params })

  console.log(data.items)
  return data
})

export const fetchFilmsTrends = createAsyncThunk('films/fetchFilmsTrends', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilmsFilter({ page, ...params })

	console.log(data.items)
  return data
})

export const fetchFilmsNew = createAsyncThunk('films/fetchFilmsNew', async (params = {}) => {
  const data = await requestFilmsNew({ ...params })

	console.log(data.items)
  return data
})

export const fetchFilmsSearch = createAsyncThunk('films/fetchFilmsSearch', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilmsSearch({ page, ...params })

  console.log(data.films)
  return data
})

export const fetchFilmsFilter = createAsyncThunk('films/fetchFilmsFilter', async (params = {}) => {
  const page = params.currentPage
  const data = await requestFilmsFilter({ page, ...params })

	console.log(data.items)
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
        state.homeList = normalizeFilms(action.payload.items)
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchTopFilms.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchTopFilms.fulfilled, (state, action) => {
        state.isLoaded = false
        state.topFilmsList = normalizeFilms(action.payload.items.filter((item) => item.type == 'FILM'))
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchTopFilms.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchTopSeries.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchTopSeries.fulfilled, (state, action) => {
        state.isLoaded = false
        state.topSeriesList = normalizeFilms(action.payload.items.filter((item) => item.type == 'TV_SERIES'))
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchTopSeries.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchFilmsTrends.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilmsTrends.fulfilled, (state, action) => {
        state.isLoaded = false
        state.trendsList = normalizeFilms(action.payload.items)
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchFilmsTrends.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchFilmsNew.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilmsNew.fulfilled, (state, action) => {
        state.isLoaded = false
        state.newList = normalizeFilms(action.payload.items)
        state.pageCount = action.payload.totalPages
      })
      .addCase(fetchFilmsNew.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchFilmsSearch.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilmsSearch.fulfilled, (state, action) => {
        state.isLoaded = false
        state.searchList = normalizeFilms(action.payload.films)
        state.pageCount = action.payload.pagesCount
      })
      .addCase(fetchFilmsSearch.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })

      .addCase(fetchFilmsFilter.pending, (state) => {
				state.isLoaded = true
				state.error = null
			})
			.addCase(fetchFilmsFilter.fulfilled, (state, action) => {
				state.isLoaded = false
				state.filterList = normalizeFilms(action.payload.items)
        state.pageCount = action.payload.totalPages
			})
			.addCase(fetchFilmsFilter.rejected, (state, action) => {
				state.isLoaded = false
				state.error = action.error.message
			})
  }
})

export const { setFilterFormData } = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer