import { filmsReducer } from '@/redux/films-slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
  }
})