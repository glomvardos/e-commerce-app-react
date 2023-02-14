import { useFetchData } from '../../../hooks'
import { UserTypes } from '../interfaces/user'
import usersService from '../services/users-service'
import { StyledText, StyledPageHeader } from '../../../components/UI'
import { useTranslation } from 'react-i18next'
import { UsersTable } from '../index'

const DisplayUsers = () => {
  const { t } = useTranslation()
  const { data: users, isLoading: boolean } = useFetchData<UserTypes[]>({
    queryKey: 'users',
    queryFn: () => usersService.getUsers()
  })

  return (
    <>
      <StyledPageHeader>
        <StyledText fontSize={40} fontWeight="500">
          {t('users')}
        </StyledText>
      </StyledPageHeader>
      <UsersTable users={[]} />
    </>
  )
}

export default DisplayUsers
