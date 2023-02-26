import { BaseApi } from '../../../services'
import {
  AuthenticationServiceInterface,
  TokenServiceTypes,
  UserTypes,
  tokenMethods,
  userMethods
} from '../index'

class AuthenticationService
  extends BaseApi
  implements AuthenticationServiceInterface {
  public async login(username: string, password: string) {
    const response = await this.post('/login/', { username, password })

    if (response?.data) {
      tokenMethods.saveToken(response.data as TokenServiceTypes)
      const user = await this.getAuthUser()
      if (user) {
        userMethods.setUser(user)
      }
    }
    return response
  }

  public async getAuthUser() {
    return await this.get<UserTypes>('/users/user/me/')
  }
}

export default new AuthenticationService()
