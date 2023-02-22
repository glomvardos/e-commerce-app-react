import { Navigate, Outlet } from 'react-router-dom'
import { tokenMethods } from '../index'
import { routeNames } from '../../../constants/routeNames'

export function PublicRoutes() {
  const token = tokenMethods.getAccessToken()
  return !token ? <Outlet /> : <Navigate to={routeNames.home} />
}
