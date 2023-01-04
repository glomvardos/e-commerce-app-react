export interface TokenServiceTypes {
  access: string
  refresh: string
}

export interface TokenMethodInterface {
  saveToken: ({ access, refresh }: TokenServiceTypes) => void
  refreshAccessToken: ({ access }: TokenServiceTypes) => void
  removeToken: () => void
  getAccessToken: () => TokenServiceTypes['access'] | null
  getRefreshToken: () => TokenServiceTypes['refresh'] | null
}
