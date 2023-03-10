import { useTranslation } from 'react-i18next'
import { redirect } from 'react-router-dom'
import { QueryClient } from 'react-query'
import { AxiosError } from 'axios'
import { BackButton, StyledText } from '../../../components/UI'
import { UserForm } from '../components/UserForm'
import { ActionTypes } from '../../../interfaces'
import usersService from '../services/users-service'
import { routeNames } from '../../../constants/routeNames'
import { exceptionToastMessage } from '../../../utils'

export function AddUser() {
  const { t } = useTranslation()

  return (
    <>
      <BackButton />
      <StyledText fontSize={40} fontWeight="500">
        {t('createUser')}
      </StyledText>
      <UserForm method="post" />
    </>

  )
}

export const action = (queryClient: QueryClient) => async ({ request }: ActionTypes) => {
  const data = await request.formData()
  try {
    await usersService.createUser(data)
    await queryClient.invalidateQueries('users')
    return redirect(routeNames.home)
  } catch (error) {
    exceptionToastMessage(error as AxiosError)
    return null
  }
}
