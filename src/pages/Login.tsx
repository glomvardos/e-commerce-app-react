import { StyledSection } from '../components/UI/StyledSection'
import { LoginForm } from '../features/authentication'

const Login = () => {
  return (
    <StyledSection background="gray" layout="form" alignment="center">
      <LoginForm />
    </StyledSection>
  )
}

export default Login
