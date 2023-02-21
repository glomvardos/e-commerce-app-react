import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import { Login, Users } from './pages'
import { Layout } from './containers'
import { AddUser, DisplayUsers } from './features/users'
import { ProtectedRoutes, PublicRoutes } from './features/authentication'
// import { routes } from './constants/routes'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routes = createBrowserRouter(
    [
      {
        element: <PublicRoutes />,
        children: [
          {
            path: '/login',
            element: <Login />

          }
        ]
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: '/',
                element: <Users />,
                children: [
                  {
                    index: true,
                    path: '/',
                    element: <DisplayUsers />
                  },
                  {
                    path: '/add-user',
                    element: <AddUser />

                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  )
  return (
    <>
      <RouterProvider router={routes} />
      {/* React toastify configuration */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        pauseOnFocusLoss={false}
        transition={Slide}
      />
    </>
  )
}

export default App
