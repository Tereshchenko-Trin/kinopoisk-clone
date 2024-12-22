import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { StartPage } from '@/pages/StartPage'
import { Home } from '@/pages/Home'
import { HomeFilms } from '@/pages/HomeFilms'
import { TrendsFilms } from '@/pages/TrendsFilms'
import { NewFilms } from '@/pages/NewFilms'
import { FavoritesFilms } from '@/pages/FavoritesFilms'
import { Settings } from '@/pages/Settings'
import { FoundFilms } from '@/pages/FoundFilms'
import { FilteredFilms } from '@/pages/FilteredFilms'
import { Film } from '@/pages/Film'
import { ErrorPage } from '@/pages/ErrorPage'

import { FilterForm } from '@/components/FilterForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
        children: [
          {
            path: ':filmId',
            element: <Film />
          },
          {
						path: 'films/:currentPage',
						element: <HomeFilms />,
					},
          {
            path: 'trends/:currentPage',
            element: <TrendsFilms />,
          },
          {
            path: 'new/:currentPage',
            element: <NewFilms />,
          },
          {
						path: 'favorites/',
						element: <FavoritesFilms />,
					},
          {
						path: 'settings/',
						element: <Settings />,
					},
          {
						path: 'search/:query/:currentPage',
						element: <FoundFilms />,
					},
          {
            path: 'filter/:query/:currentPage',
            element: <FilteredFilms />,
          },
          {
						path: 'filter/',
						element: <FilterForm />,
					},
        ]
      },
      {
        path: '/error',
        element: <ErrorPage />
      },
    ]
  },
])