import { AxiosResponse } from 'axios'
import { UserTypes } from '../../authentication'
import { ResourceIdType } from '../../../interfaces'

export interface UsersServiceInterface {
  getUsers(): Promise<UserTypes[] | null>
  deleteUser({ id }: ResourceIdType): Promise<AxiosResponse | null>
}
