import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LobbyPage from '../pages/LobbyPage'
import { ROUTES } from './ROUTES'

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: ROUTES.home,
  },
  {
    element: <LobbyPage />,
    path: ROUTES.lobby,
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
