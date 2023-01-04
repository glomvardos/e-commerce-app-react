import {
  TokenMethodInterface,
  TokenServiceTypes
} from '../interfaces/authentication'

class TokenMethods implements TokenMethodInterface {
  saveToken({ access, refresh }: TokenServiceTypes): void {
    localStorage.setItem('accessToken', access)
    localStorage.setItem('refreshToken', refresh)
  }

  refreshAccessToken({ access }: TokenServiceTypes): void {
    localStorage.setItem('accessToken', access)
  }

  removeToken(): void {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

  getAccessToken(): TokenServiceTypes['access'] | null {
    return localStorage.getItem('accessToken')
  }

  getRefreshToken(): TokenServiceTypes['refresh'] | null {
    return localStorage.getItem('refreshToken')
  }
}

export default new TokenMethods()
