import { tokenMethods } from '../index'
import { Navigate, Outlet } from 'react-router-dom'
import routes from '../../../constants/routes'

const PublicRoutes = () => {
  const token = tokenMethods.getAccessToken()
  return !!!token ? <Outlet /> : <Navigate to={routes.home} />
}

export default PublicRoutes
