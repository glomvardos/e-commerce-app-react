import { AxiosResponse } from 'axios'
import { UsersServiceInterface } from './users-service.interface'
import { BaseApi } from '../../../services'
import { UserTypes } from '../../authentication'
import { ResourceIdType } from '../../../interfaces'

class UsersService extends BaseApi implements UsersServiceInterface {
  public async getUsers(): Promise<UserTypes[] | null> {
    return await this.get<UserTypes[]>('/users/user/')
  }

  public async deleteUser({
    id
  }: ResourceIdType): Promise<AxiosResponse | null> {
    return await this.delete(`/users/user/${id}/`)
  }
}

export default new UsersService()
