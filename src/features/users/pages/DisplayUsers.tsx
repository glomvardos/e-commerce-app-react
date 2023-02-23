import { useTranslation } from 'react-i18next'
import {
  useNavigate, defer, Await, useLoaderData
} from 'react-router-dom'
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
import { ActionTypes } from '../../../interfaces'

const usersQuery = () => ({
  queryKey: 'users',
  queryFn: () => usersService.getUsers()
});

export const loader = (queryClient: QueryClient) => () => {
  const query = usersQuery();
  return (
    defer({
      users: queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query)
    })
  );
}

export function DisplayUsers() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { users } = useLoaderData() as { users: UserTypes[] };
  const { data } = useGetData<UserTypes[]>(
    {
      ...usersQuery(),
      initialData: users
    }
  )

  return (

    <>
      <ConfirmationModal />
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
      <Suspense fallback={<p>LOADING</p>}>
        <Await resolve={users}>
          <UsersTable users={data} />
        </Await>
      </Suspense>
    </>
  )
}
