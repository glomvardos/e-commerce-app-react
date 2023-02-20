import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  FormButtons,
  StyledForm,
  StyledFormLayout,
  StyledInput, StyledSelect
} from '../../../components/Form'
import { UserTypes } from '../../authentication'
import { UserFormTypes, userRoleOptions, usersValidationSchema } from '../index'

const backgroundLight = 'var(--light)'

interface Props {
  user? : UserTypes
  onSubmit: (values: UserFormTypes) => void
}
export function UserForm({ onSubmit, user }:Props) {
  const { t } = useTranslation()
  const formik = useFormik({
    initialValues: {
      firstname: user?.first_name ?? '',
      lastname: user?.last_name ?? '',
      username: user?.username ?? '',
      email: user?.email ?? '',
      role: user?.user_role ?? 'ADMIN',
      password: '',
      confirmPassword: ''
    },
    validationSchema: usersValidationSchema.createUser,
    onSubmit
  })

  return (

    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledFormLayout>
        <StyledInput
          background={backgroundLight}
          placeholder={t<string>('username')}
          error={!!(formik.touched.username && formik.errors.username)}
          {...formik.getFieldProps('username')}
        />
        <StyledInput
          background={backgroundLight}
          placeholder={t<string>('firstname')}
          error={!!(formik.touched.firstname && formik.errors.firstname)}
          {...formik.getFieldProps('firstname')}
        />
        <StyledInput
          background={backgroundLight}
          placeholder={t<string>('lastname')}
          error={!!(formik.touched.lastname && formik.errors.lastname)}
          {...formik.getFieldProps('lastname')}
        />
        <StyledInput
          type="email"
          background={backgroundLight}
          placeholder={t<string>('email')}
          error={!!(formik.touched.email && formik.errors.email)}
          {...formik.getFieldProps('email')}
        />
        <StyledSelect background={backgroundLight} {...formik.getFieldProps('role')}>
          {userRoleOptions.map((role) => (
            <option key={role.id} value={role.value}>
              {t(role.label)}
            </option>
          ))}
        </StyledSelect>
        <StyledInput
          type="password"
          background={backgroundLight}
          placeholder={t<string>('password')}
          error={!!(formik.touched.password && formik.errors.password)}
          {...formik.getFieldProps('password')}
        />
        <StyledInput
          type="password"
          background={backgroundLight}
          placeholder={t<string>('confirmPassword')}
          error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
          {...formik.getFieldProps('confirmPassword')}
        />
      </StyledFormLayout>
      <FormButtons primaryText="createUser" />
    </StyledForm>
  );
}
