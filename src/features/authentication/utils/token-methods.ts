import { TokenMethodInterface, TokenServiceTypes } from '../../../interfaces'

class TokenMethods implements TokenMethodInterface {
  saveToken({ accessToken, refreshToken }: TokenServiceTypes): void {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  }

  refreshAccessToken({ accessToken }: TokenServiceTypes): void {
    localStorage.setItem('accessToken', accessToken)
  }

  removeToken(): void {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

  getAccessToken(): TokenServiceTypes['accessToken'] | null {
    return localStorage.getItem('accessToken')
  }

  getRefreshToken(): TokenServiceTypes['refreshToken'] | null {
    return localStorage.getItem('refreshToken')
  }
}

export default new TokenMethods()
