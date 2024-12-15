import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { GetStarted } from '@/pages/GetStarted'
import { Home } from '@/pages/Home'
import { Films } from '@/pages/Films'
import { Favorites } from '@/pages/Favorites'
import { Trends } from '@/pages/Trends'
import { Film } from '@/pages/Film'
import { ErrorPage } from '@/pages/ErrorPage'

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