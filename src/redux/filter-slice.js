import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilterFilms } from '@/services/filter'

const initialState = {
	filterList: [],
	limit: 20,
}

export const fetchFilterFilms = createAsyncThunk('filter/fetchFilterFilms', async (params = {}) => {
	console.log(params)
	// const limit = getState().filter.limit
  const data = await requestFilterFilms(params)

	console.log(data.items)
  return data
})

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchFilterFilms.pending, (state) => {
				state.isLoaded = true
				state.error = null
			})
			.addCase(fetchFilterFilms.fulfilled, (state, action) => {
				state.isLoaded = false
				state.filterList = action.payload.items
			})
			.addCase(fetchFilterFilms.rejected, (state, action) => {
				state.isLoaded = false
				state.error = action.error.message
			})
	}
})

export const filterReducer = filterSlice.reducer