import { UserTypes } from '../../authentication'
import { ReactTable } from '../../../components/Table'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CellValue } from '../../../interfaces'
import TableActions from '../../../components/Table/TableActions'

interface Props {
  users: UserTypes[]
}
const UsersTable = ({ users = [] }: Props) => {
  const { t } = useTranslation()

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
        Cell: ({ value }: CellValue) => (
          <TableActions
            onClickHandlerDelete={() => {}}
            onClickHandlerEdit={() => {}}
          />
        )
      }
    ],
    [t]
  )

  return (
    <>
      <ReactTable data={users} columns={columns} />
    </>
  )
}

export default UsersTable
