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
import { userRoleOptions } from '../index'

const backgroundLight = 'var(--light)'

interface Props {
  method: 'patch' | 'post'
  user? : UserTypes
}
export function UserForm({ method, user }:Props) {
  const { t } = useTranslation()

  return (

    <Form method={method}>
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
        <StyledSelect name="role" background={backgroundLight} defaultValue={user?.user_role ?? 'ADMIN'}>
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
      <FormButtons primaryText={user ? 'editUser' : 'createUser'} />
    </Form>
  );
}
