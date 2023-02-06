import { UsersServiceInterface } from './users-service.interface'
import { BaseApi } from '../../../services'
import { UserTypes } from '../interfaces/user'

class UsersService extends BaseApi implements UsersServiceInterface {
  public async getUsers(): Promise<UserTypes[] | undefined> {
    return await this.get<UserTypes[]>('/users/user/')
  }
}

export default new UsersService()
