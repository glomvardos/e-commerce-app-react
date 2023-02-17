import { Outlet } from 'react-router-dom'
import { StyledSection } from '../components/UI'

export function Users() {
  return (
    <StyledSection>
      <Outlet />
    </StyledSection>
  )
}

export default Users
