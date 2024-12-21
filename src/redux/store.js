import { configureStore } from '@reduxjs/toolkit'
import { filmsReducer } from '@/redux/films-slice'
import { filmReducer } from '@/redux/film-slice'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
  }
})