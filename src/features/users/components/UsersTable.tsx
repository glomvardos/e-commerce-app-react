import { UserTypes } from '../../authentication'
import { ReactTable } from '../../../components/Table'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

interface IProps {
  users: UserTypes[]
}
const UsersTable = ({ users = [] }: IProps) => {
  const { t } = useTranslation()
  const columns = useMemo(
    () => [
      {
        Header: t('fullname')
      }
    ],
    [t]
  )

  return (
    <>
      <ReactTable data={users} columns={[]} />
    </>
  )
}

export default UsersTable
