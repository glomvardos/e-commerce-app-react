import { AxiosResponse } from 'axios'
import { UsersServiceInterface } from './users-service.interface'
import { BaseApi } from '../../../services'
import { UserTypes } from '../../authentication'
import { ResourceIdType } from '../../../interfaces'
import { UserFormTypes } from '../interfaces/user-form'

class UsersService extends BaseApi implements UsersServiceInterface {
  public async getUsers(): Promise<UserTypes[] | null> {
    return await this.get<UserTypes[]>('/users/user/')
  }

  public async createUser(values:UserFormTypes): Promise<AxiosResponse | null> {
    return await this.post('/users/user/', {
      username: values.username,
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      user_role: values.role,
      password: values.password
    })
  }

  public async deleteUser({
    id
  }: ResourceIdType): Promise<AxiosResponse | null> {
    return await this.delete(`/users/user/${id}/`)
  }
}

export default new UsersService()
