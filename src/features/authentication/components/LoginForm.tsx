import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useFormik } from 'formik'
import { StyledForm, StyledInput } from '../../../components/Form'
import {
  StyledButton,
  StyledCard,
  StyledGridContainer,
  StyledSpinner
} from '../../../components/UI'
import { AuthenticationService, formikValues, validationSchema } from '../index'
import { toast } from 'react-toastify'
import routes from '../../../constants/routes'

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: formikValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true)
      AuthenticationService.login(values.username, values.password)
        .then((_) => {
          navigate(routes.home)
          setIsLoading(false)
        })
        .catch((error) => {
          toast.error(error.message)
          setIsLoading(false)
        })
    }
  })

  return (
    <StyledCard>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledGridContainer>
          <StyledInput
            type="text"
            placeholder="Username"
            error={!!(formik.touched.username && formik.errors.username)}
            {...formik.getFieldProps('username')}
          />
          <StyledInput
            type="password"
            placeholder="Password"
            error={!!(formik.touched.password && formik.errors.password)}
            {...formik.getFieldProps('password')}
          />
          <StyledButton type="submit">
            {isLoading ? <StyledSpinner /> : 'Login'}
          </StyledButton>
        </StyledGridContainer>
      </StyledForm>
    </StyledCard>
  )
}

export default LoginForm
