import { Navigate, Outlet } from 'react-router-dom'
import { tokenMethods } from '../index'
import { routeNames } from '../../../constants/routeNames'

export function ProtectedRoutes() {
  const token = tokenMethods.getAccessToken()

  return token ? <Outlet /> : <Navigate to={routeNames.login} />
}
