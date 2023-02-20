import { AxiosResponse } from 'axios'
import { UserTypes } from '../../authentication'
import { ResourceIdType } from '../../../interfaces'
import { UserFormTypes } from '../interfaces/user-form'

export interface UsersServiceInterface {
  getUsers(): Promise<UserTypes[] | null>
  createUser(values: UserFormTypes): Promise<AxiosResponse | null>
  deleteUser({ id }: ResourceIdType): Promise<AxiosResponse | null>
}
