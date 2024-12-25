import { configureStore } from '@reduxjs/toolkit'
import { filmsReducer } from '@/redux/films-slice'
import { filmReducer } from '@/redux/film-slice'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch