import { tokenMethods, userMethods } from '../index'
import { Navigate, Outlet } from 'react-router-dom'
import routes from '../../../constants/routes'

const ProtectedRoutes = () => {
  const token = tokenMethods.getAccessToken()

  return !!token ? <Outlet /> : <Navigate to={routes.login} />
}

export default ProtectedRoutes
