import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { StartPage } from '@/pages/StartPage'
import { Main } from '@/pages/Main'
import { HomeFilms } from '@/pages/HomeFilms'
import { TrendsFilms } from '@/pages/TrendsFilms'
import { TopFilms } from '@/pages/TopFilms'
import { TopSeries } from '@/pages/TopSeries'
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
        path: '/main',
        element: <Main />,
        children: [
          {
            path: ':filmId',
            element: <Film />
          },
          {
						path: 'home/:currentPage',
						element: <HomeFilms />,
					},
          {
            path: 'trends/:currentPage',
            element: <TrendsFilms />,
          },
          {
						path: 'top-films/:currentPage',
						element: <TopFilms />,
					},
          {
						path: 'top-series/:currentPage',
						element: <TopSeries />,
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