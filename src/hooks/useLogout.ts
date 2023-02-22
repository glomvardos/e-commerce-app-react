import { useNavigate } from 'react-router-dom'
import { routeNames } from '../constants/routeNames'

export const useLogout = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    localStorage.clear()
    navigate(routeNames.login)
  }

  return {
    onLogout
  }
}
