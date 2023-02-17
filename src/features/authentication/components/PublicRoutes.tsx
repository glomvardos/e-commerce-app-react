import { Navigate, Outlet } from 'react-router-dom'
import { tokenMethods } from '../index'
import { routes } from '../../../constants/routes'

export function PublicRoutes() {
  const token = tokenMethods.getAccessToken()
  return !token ? <Outlet /> : <Navigate to={routes.home} />
}
