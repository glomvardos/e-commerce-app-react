import { useFetchData } from '../../../hooks'
import usersService from '../services/users-service'
import {
  StyledText,
  StyledPageHeader,
  StyledButton
} from '../../../components/UI'
import { useTranslation } from 'react-i18next'
import { UsersTable } from '../index'
import { UserTypes } from '../../authentication'
import { useNavigate } from 'react-router-dom'
import routes from '../../../constants/routes'

const DisplayUsers = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
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
        <StyledButton
          type="button"
          onClick={() => navigate(routes.addUser)}
          color="primary"
        >
          {t('addUser')}
        </StyledButton>
      </StyledPageHeader>
      <UsersTable users={users} />
    </>
  )
}

export default DisplayUsers
