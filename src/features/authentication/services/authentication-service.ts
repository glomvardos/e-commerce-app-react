import { AuthenticationServiceInterface } from '../index'
import { BaseApi } from '../../../services'
import { UserTypes } from '../interfaces/user'

class AuthenticationService
  extends BaseApi
  implements AuthenticationServiceInterface
{
  public async login(username: string, password: string) {
    return await this.post('/auth/login/', { username, password })
  }

  public async getAuthUser() {
    return await this.get<UserTypes>('/users/user/me/')
  }
}

export default new AuthenticationService()
