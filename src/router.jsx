import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { StartPage } from '@/pages/StartPage'
import { Home } from '@/pages/Home'
import { Films } from '@/pages/Films'
import { Trends } from '@/pages/Trends'
import { Favorites } from '@/pages/Favorites'
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
						element: <Films />,
					},
          {
            path: 'trends/',
            element: <Trends />,
          },
          {
						path: 'favorites/',
						element: <Favorites />,
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