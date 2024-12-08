import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Introduction } from '@/pages/Introduction'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Introduction />
      }
    ]
  }
])