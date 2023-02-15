import { UserTypes } from '../../authentication'

export interface UsersServiceInterface {
  getUsers(): Promise<UserTypes[] | undefined>
}
