import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { redirect, useNavigate } from 'react-router-dom'
import { QueryClient } from 'react-query'
import { UserTypes } from '../../authentication'
import { ReactTable, TableActions } from '../../../components/Table'
import { ActionTypes, CellValue, OriginalRowTypes } from '../../../interfaces'
import { useModalContext } from '../../common/modal'
import usersService from '../services/users-service'
import { routeNames } from '../../../constants/routeNames'

interface Props {
  users: UserTypes[]
}
export function UsersTable({ users }: Props) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { openModalHandler, closeModalHandler } = useModalContext()
  const columns = useMemo(
    () => [
      {
        Header: t('Id'),
        accessor: 'id'
      },
      {
        Header: t('firstname'),
        accessor: 'first_name'
      },
      {
        Header: t('lastname'),
        accessor: 'last_name'
      },
      {
        Header: t('email'),
        accessor: 'email'
      },
      {
        Header: t('role'),
        accessor: 'user_role',
        Cell: ({ value }: CellValue) => <span>{t(value)}</span>
      },
      {
        Header: t('actions'),
        Cell: ({ row: { original } }: OriginalRowTypes<UserTypes>) => (
          <TableActions
            onClickHandlerEdit={() => navigate(`${original.id}/${routeNames.editUser}`)}
            onClickHandlerDelete={() => openModalHandler({
              message: 'deleteUserMessage',
              resourceId: original.id,
              mutateKey: 'users'
            })}
          />
        )
      }
    ],
    [t, openModalHandler]
  )

  return (
    <ReactTable data={users} columns={columns} />
  )
}

export const action = (queryClient: QueryClient) => async ({ request }: ActionTypes) => {
  const data = await request.formData()
  await usersService.deleteUser({ id: data.get('id') as unknown as number })
  await queryClient.invalidateQueries('users')
  return null
}
