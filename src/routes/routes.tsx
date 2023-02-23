import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { QueryClient } from 'react-query'
import styled from 'styled-components'
import { ProtectedRoutes, PublicRoutes } from '../features/authentication'
import { routeNames } from '../constants/routeNames'
import { Login, Users } from '../pages'
import { Layout } from '../containers'
import {
  createUserAction, deleteUserAction, DisplayUsers, usersLoader
} from '../features/users'

const AddUser = lazy(() => import('../features/users/pages/AddUser'))

const StyledDiv = styled.div`
  position: absolute;
  bottom: 0;
    left: 0;
    right: 0;
  width: 500px;
  height: 500px;
  background-color: red;
`
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
                  action: deleteUserAction(queryClient),
                  element: <DisplayUsers />
                },
                {
                  path: routeNames.addUser,
                  element: <Suspense><AddUser /></Suspense>,
                  action: createUserAction(queryClient),
                  errorElement: <StyledDiv />
                }
              ]
            }
          ]
        }
      ]
    }
  ]
)
