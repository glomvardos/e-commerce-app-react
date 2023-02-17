import { useNavigate } from 'react-router-dom'
import { routes } from '../constants/routes'

export const useLogout = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    localStorage.clear()
    navigate(routes.login)
  }

  return {
    onLogout
  }
}
