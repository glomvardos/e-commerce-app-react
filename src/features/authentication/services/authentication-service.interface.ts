import { AxiosResponse } from 'axios'
import { UserTypes } from '../index'

export interface AuthenticationServiceInterface {
  login: (
    username: string,
    password: string
  ) => Promise<AxiosResponse | null>
  getAuthUser: () => Promise<UserTypes | null>
}
