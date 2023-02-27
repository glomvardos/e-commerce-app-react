import { useTranslation } from 'react-i18next'
import {
  Await,
  defer, redirect, useLoaderData, useParams
} from 'react-router-dom'
import { QueryClient } from 'react-query'
import { Suspense } from 'react'
import { BackButton, StyledText } from '../../../components/UI'
import { UserForm } from '../components/UserForm'
import { ActionTypes } from '../../../interfaces'
import usersService from '../services/users-service'
import { routeNames } from '../../../constants/routeNames'
import { exceptionToastMessage } from '../../../utils'
import { UserTypes } from '../../authentication'
import { useGetData } from '../../../hooks'
import { ReFetchData } from '../../../components/ErrorUI'

const userQuery = (id: string) => ({
  queryKey: `user ${id}`,
  queryFn: () => usersService.getSingleUser(id)
});

export const loader = (queryClient: QueryClient) => ({ params }:ActionTypes) => {
  const query = userQuery(params.id);
  return (
    defer({
      user: queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query)
    })
  );
}

export const action = (queryClient: QueryClient) => async ({ request, params }: ActionTypes) => {
  const data = await request.formData()
  try {
    await usersService.editUser(data, params.id)
    Promise.all([
      queryClient.invalidateQueries('users'),
      queryClient.invalidateQueries(`user ${params.id}`)
    ])
    return redirect(routeNames.home)
  } catch (error: any) {
    exceptionToastMessage(error)
    return error.message
  }
}

export function EditUser() {
  const { t } = useTranslation()
  const params = useParams()
  const { user } = useLoaderData() as { user: UserTypes };
  const { data } = useGetData<UserTypes>(
    {
      ...userQuery(params.id!),
      initialData: user
    }
  )

  return (
    <>
      <BackButton />
      <StyledText fontSize={40} fontWeight="500">
        {t('editUser')}
      </StyledText>
      <Suspense fallback={<p>LOADING...</p>}>
        <Await resolve={user} errorElement={<ReFetchData message="failedToLoadUser" />}>
          <UserForm method="patch" user={data} />
        </Await>
      </Suspense>
    </>
  )
}
