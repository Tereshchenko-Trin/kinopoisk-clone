import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { GetStarted } from '@/pages/GetStarted'
import { Home } from '@/pages/Home'
import { Films } from '@/pages/Films'
import { Favorites } from '@/pages/Favorites'
import { Trends } from '@/pages/Trends'
import { FoundFilms } from '@/pages/FoundFilms'
import { FilteredFilms } from '@/pages/FilteredFilms'
import { Film } from '@/pages/Film'
import { ErrorPage } from '@/pages/ErrorPage'

import { FilterForm } from '@/components/FilterForm'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
        children: [
          {
						path: 'films/',
						element: <Films />,
					},
          {
						path: 'favorites/',
						element: <Favorites />,
					},
          {
						path: 'trends/',
						element: <Trends />,
					},
          {
            path: ':filmId',
            element: <Film />
          },
          {
						path: 'search/:query/',
						element: <FoundFilms />,
					},
          {
						path: 'filter',
						element: <FilterForm />,
					},
          {
						path: 'filter/:query',
						element: <FilteredFilms />,
					},
        ]
      },
      {
        path: '/error',
        element: <ErrorPage />
      },
    ]
  },
  {
    path: '/',
    element: <GetStarted />
  },
])