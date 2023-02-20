import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { BackButton, StyledText } from '../../../components/UI'
import { UserForm } from '../components/UserForm'
import { UserFormTypes } from '../interfaces/user-form'
import { useMutation } from '../../../hooks'
import { UsersService } from '../index'

export function AddUser() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { trigger } = useMutation<UserFormTypes>({
    mutateKey: 'users',
    mutateFn: (_, { arg }) => UsersService.createUser(arg)
  })

  const onSubmit = async (values: UserFormTypes) => {
    await trigger(values, {
      onSuccess: () => {
        navigate(-1)
      }
    })
  }

  return (
    <>
      <BackButton />
      <StyledText fontSize={40} fontWeight="500">
        {t('createUser')}
      </StyledText>
      <UserForm onSubmit={onSubmit} />
    </>

  )
}
