import { useTranslation } from 'react-i18next'
import { useNavigate, defer, Await } from 'react-router-dom'
import { QueryClient } from 'react-query'
import { Suspense } from 'react'
import { useGetData } from '../../../hooks'
import usersService from '../services/users-service'
import {
  StyledText,
  StyledPageHeader,
  StyledButton
} from '../../../components/UI'
import { UsersTable } from '../index'
import { UserTypes } from '../../authentication'
import { routeNames } from '../../../constants/routeNames'
import { ConfirmationModal } from '../../common/modal'

const usersQuery = () => ({
  queryKey: 'users',
  queryFn: () => usersService.getUsers()
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = usersQuery();
  return (
    defer({
      users: queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query)
    })
  );
}

export function DisplayUsers() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { data: users, isLoading: boolean } = useGetData<UserTypes[]>(usersQuery())

  return (
    <Suspense fallback={<p>LOADING</p>}>
      <Await resolve={users}>
        {(loadedUsers) => (
          <>

            <ConfirmationModal
              service={usersService}
              deleteFn={usersService.deleteUser}
            />
            <StyledPageHeader>
              <StyledText fontSize={40} fontWeight="500">
                {t('users')}
              </StyledText>
              <StyledButton
                type="button"
                onClick={() => navigate(routeNames.addUser)}
                color="primary"
              >
                {t('addUser')}
              </StyledButton>
            </StyledPageHeader>
            <UsersTable users={loadedUsers} />
          </>

        )}
      </Await>
    </Suspense>
  )
}
