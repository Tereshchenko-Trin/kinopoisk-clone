import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { 
  requestFilm, 
  requestFilmStaff, 
  requestFilmBoxOffice, 
  requestFilmSimilar
} from '@/services/film'
import { favorites } from '@/utils/favorites'
import { IFilmData, IFilmBoxOffice, IFilmSimilarList, IFilmStaffList } from '@/types/filmDataTypes'

interface IFilmsState {
  data: IFilmData | null,
  staffList: IFilmStaffList[],
  boxOffice?: IFilmBoxOffice[],
  similarList?: IFilmSimilarList[],
  favoritesList: IFilmData[],
  favoritesId: number[],
  isLoaded: boolean,
  error?: string | null,
}

const initialState: IFilmsState = {
  data: null,
  staffList: [],
  boxOffice: [],
  similarList: [],
  favoritesList: favorites.getFromLocalStorage() || [],
  favoritesId: [],
  isLoaded: false,
  error: null
}

export const fetchFilm = createAsyncThunk('film/fetchFilm', async (kinopoiskId: number, { rejectWithValue }) => {
  const data = await requestFilm(kinopoiskId)

  if (data.hasError) {
    return (rejectWithValue(data))
  }

  return data
})

export const fetchFilmStaff = createAsyncThunk('film/fetchFilmStaff', async (filmId: number, { rejectWithValue }) => {
  const data = await requestFilmStaff(filmId)

  if (data.hasError) {
    return (rejectWithValue(data))
  }

  return data
})

export const fetchFilmBoxOffice = createAsyncThunk('film/fetchFilmBoxOffice', async (kinopoiskId: number, { rejectWithValue }) => {
  const data = await requestFilmBoxOffice(kinopoiskId)

  if (data.hasError) {
    return (rejectWithValue(data))
  }

  return data
})

export const fetchFilmSimilar = createAsyncThunk('film/fetchFilmSimilar', async (kinopoiskId: number, { rejectWithValue }) => {
  const data = await requestFilmSimilar(kinopoiskId)

  console.log(data.items)
  if (data.hasError) {
    return (rejectWithValue(data))
  }

  return data
})

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    isFavorite: (state, action: PayloadAction<number>) => {
      const filmId = action.payload
      if(!state.favoritesId.includes(filmId)) {
        state.favoritesId.push(filmId)
        state.favoritesList.push(state.data)
      } else {
        state.favoritesId = state.favoritesId.filter((id) => id !== filmId)
        state.favoritesList = state.favoritesList.filter((film) => film.kinopoiskId !== filmId)
      }
      favorites.setToLocalStorage({ ...state.favoritesList })
    }
  },

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

      .addCase(fetchFilmSimilar.pending, (state) => {
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchFilmSimilar.fulfilled, (state, action) => {
        state.isLoaded = false
        state.similarList = action.payload.items
      })
      .addCase(fetchFilmSimilar.rejected, (state, action) => {
        state.isLoaded = false
        state.error = action.error.message
      })
  }
})

export const { isFavorite } = filmSlice.actions

export const filmReducer = filmSlice.reducer