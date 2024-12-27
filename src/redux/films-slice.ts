import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFilterList, IHomeList, INewList, ISearchList, ITopFilmsList, ITopSeriesList, ITrendsList } from '@/types/filmDataTypes'
import { IFilterData } from '@/types/IFilterData'
import { 
  requestFilms,
  requestFilmsNew, 
  requestFilmsSearch, 
  requestFilmsFilter 
} from '@/services/films'

interface IFilmsState {
  homeList: IHomeList[],
  topFilmsList: ITopFilmsList[],
  topSeriesList: ITopSeriesList[],
  trendsList: ITrendsList[],
  newList: INewList[],
  searchList: ISearchList[],
  filterList: IFilterList[],
  pageCount: number | null,
  isLoaded: boolean,
  error?: string | null,
  filterData: IFilterData | null,
  isShownFilterModal: boolean,
}

const initialState: IFilmsState = {
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
  isShownFilterModal: false,
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
    setFilterFormData: (state, action: PayloadAction<IFilterData>) => {
      state.filterData = action.payload
    },
    shownFilterModal: (state) => {
      state.isShownFilterModal = true
      console.log(state.isShownFilterModal)
    },
    hideFilterModal: (state) => {
      state.isShownFilterModal = false
      console.log(state.isShownFilterModal)
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
        state.homeList = action.payload.items
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
        state.topFilmsList = action.payload.items.filter((item: ITopFilmsList) => item.type == 'FILM')
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
        state.topSeriesList = action.payload.items.filter((item: ITopSeriesList) => item.type == 'TV_SERIES')
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
        state.trendsList = action.payload.items
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
        state.newList = action.payload.items
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
        state.searchList = action.payload.films
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
				state.filterList = action.payload.items
        state.pageCount = action.payload.totalPages
			})
			.addCase(fetchFilmsFilter.rejected, (state, action) => {
				state.isLoaded = false
				state.error = action.error.message
			})
  }
})

export const { setFilterFormData, shownFilterModal, hideFilterModal } = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer