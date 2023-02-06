import { useFetchData } from '../../../hooks'
import { UserTypes } from '../interfaces/user'
import usersService from '../services/users-service'

const DisplayUsers = () => {
  const { data: users, isLoading: boolean } = useFetchData<UserTypes[]>({
    queryKey: 'users',
    queryFn: () => usersService.getUsers()
  })

  return <div></div>
}

export default DisplayUsers
