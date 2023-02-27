import { AxiosResponse } from 'axios'
import { UsersServiceInterface } from './users-service.interface'
import { BaseApi } from '../../../services'
import { UserTypes } from '../../authentication'
import { ResourceIdType } from '../../../interfaces'

class UsersService extends BaseApi implements UsersServiceInterface {
  public async getUsers(): Promise<UserTypes[] | null> {
    return await this.get<UserTypes[]>('/users/user/')
  }

  public async getSingleUser(id:string): Promise<UserTypes | null> {
    return await this.get<UserTypes>(`/users/user/${id}/`)
  }

  public async createUser(data:FormData): Promise<AxiosResponse | null> {
    return await this.post('/users/user/', {
      first_name: data.get('firstname'),
      last_name: data.get('lastname'),
      username: data.get('username'),
      email: data.get('email'),
      user_role: data.get('role'),
      password: data.get('password')
    })
  }

  public async editUser(data:FormData, id: string): Promise<AxiosResponse | null> {
    const formData = {
      first_name: data.get('firstname'),
      last_name: data.get('lastname'),
      username: data.get('username'),
      email: data.get('email'),
      user_role: data.get('role'),
      password: data.get('password')
    }

    if (data.get('password') === '') {
      // @ts-ignore
      delete formData.password
    }

    return await this.patch(`/users/user/${id}/`, formData)
  }

  public async deleteUser({
    id
  }: ResourceIdType): Promise<AxiosResponse | null> {
    return await this.delete(`/users/user/${id}/`)
  }
}

export default new UsersService()
