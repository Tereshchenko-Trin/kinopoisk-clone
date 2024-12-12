import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { GetStarted } from '@/pages/GetStarted'
import { Home } from '@/pages/Home'
import { Film } from '@/pages/Film'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <GetStarted />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/home/:filmId',
        element: <Film />
      },
    ]
  }
])