import { UserTypes } from '../interfaces/user'

export interface UsersServiceInterface {
  getUsers(): Promise<UserTypes[] | undefined>
}
