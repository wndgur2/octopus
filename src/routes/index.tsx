import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LobbyPage from '../pages/LobbyPage'
import { ROUTES } from './ROUTES'
import RootLayout from '../layouts/RootLayout'

const router = createBrowserRouter([
  {
    Component: () => <RootLayout />,
    children: [
      {
        element: <HomePage />,
        path: ROUTES.HOME,
      },
      {
        element: <LobbyPage />,
        path: ROUTES.LOBBY,
      },
    ],
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
