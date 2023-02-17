import { StyledSection } from '../components/UI'
import { LoginForm } from '../features/authentication'

export function Login() {
  return (
    <StyledSection background="gray" layout="form" alignment="center">
      <LoginForm />
    </StyledSection>
  )
}
