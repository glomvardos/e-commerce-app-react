import { Outlet } from 'react-router-dom'
import { Navigation } from '../features/navigation'
import { StyledLayoutContainer } from '../components/UI'
import { Header } from '../components/Header'

export function Layout() {
  return (
    <StyledLayoutContainer>
      <Navigation />
      <div className="right-container">
        <Header />
        <Outlet />
      </div>
    </StyledLayoutContainer>
  )
}
