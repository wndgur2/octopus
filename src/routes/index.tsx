import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: '/',
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
