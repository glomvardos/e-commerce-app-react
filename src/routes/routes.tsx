import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { QueryClient } from 'react-query'
import { ProtectedRoutes, PublicRoutes } from '../features/authentication'
import { routeNames } from '../constants/routeNames'
import { Login, Users } from '../pages'
import { Layout } from '../containers'
import { DisplayUsers, usersLoader } from '../features/users'

const AddUser = lazy(() => import('../features/users/pages/AddUser'))

export const routes = (queryClient: QueryClient) => createBrowserRouter(
  [
    {
      element: <PublicRoutes />,
      children: [
        {
          path: routeNames.login,
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
              path: routeNames.home,
              element: <Users />,
              children: [
                {
                  index: true,
                  loader: usersLoader(queryClient),
                  element: <DisplayUsers />
                },
                {
                  path: routeNames.addUser,
                  element: <Suspense><AddUser /></Suspense>

                }
              ]
            }
          ]
        }
      ]
    }
  ]
)
