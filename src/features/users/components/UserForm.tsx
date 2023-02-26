import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Form } from 'react-router-dom'
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
}
export function UserForm({ user }:Props) {
  const { t } = useTranslation()

  return (

    <Form method="post">
      <StyledFormLayout>
        <StyledInput
          name="username"
          background={backgroundLight}
          placeholder={t<string>('username')}
          defaultValue={user?.username ?? ''}
        />
        <StyledInput
          name="firstname"
          background={backgroundLight}
          placeholder={t<string>('firstname')}
          defaultValue={user?.first_name ?? ''}
        />
        <StyledInput
          name="lastname"
          background={backgroundLight}
          placeholder={t<string>('lastname')}
          defaultValue={user?.last_name ?? ''}
        />
        <StyledInput
          type="email"
          name="email"
          background={backgroundLight}
          placeholder={t<string>('email')}
          defaultValue={user?.email ?? ''}

        />
        <StyledSelect name="role" background={backgroundLight}>
          {userRoleOptions.map((role) => (
            <option key={role.id} value={role.value}>
              {t(role.label)}
            </option>
          ))}
        </StyledSelect>
        <StyledInput
          type="password"
          name="password"
          background={backgroundLight}
          placeholder={t<string>('password')}
        />
        <StyledInput
          type="password"
          name="confirmPassword"
          background={backgroundLight}
          placeholder={t<string>('confirmPassword')}
        />
      </StyledFormLayout>
      <FormButtons primaryText="createUser" />
    </Form>
  );
}
