import { StyledSection } from '../components/UI'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <StyledSection>
      <Outlet />
    </StyledSection>
  )
}

export default Users
