import { createBrowserRouter } from 'react-router-dom'
import { QueryClient } from 'react-query'
import { ProtectedRoutes, PublicRoutes } from '../features/authentication'
import { routeNames } from '../constants/routeNames'
import { Login, Users } from '../pages'
import { Layout } from '../containers'
import {
  createUserAction,
  deleteUserAction,
  DisplayUsers,
  usersLoader,
  AddUser,
  EditUser,
  editUserAction,
  userLoader
} from '../features/users'

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
                  element: <DisplayUsers />,
                  id: 'users'
                },
                {
                  path: routeNames.addUser,
                  element: <AddUser />,
                  action: createUserAction(queryClient)
                },
                {
                  path: `:id/${routeNames.editUser}`,
                  element: <EditUser />,
                  action: editUserAction(queryClient),
                  loader: userLoader(queryClient)
                }
              ]
            }
          ]
        }
      ]
    }
  ]
)
