import { Outlet } from 'react-router-dom'
import { Navigation } from '../features/navigation'
import { StyledLayoutContainer } from '../components/UI'

const Layout = () => {
  return (
    <StyledLayoutContainer>
      <Navigation />
      <Outlet />
    </StyledLayoutContainer>
  )
}

export default Layout
