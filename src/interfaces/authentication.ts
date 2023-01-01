export interface TokenServiceTypes {
    accessToken: string
    refreshToken: string
}

export interface TokenMethodInterface {
    saveToken: ({ accessToken, refreshToken }: TokenServiceTypes) => void
    refreshAccessToken: ({ accessToken }: TokenServiceTypes) => void
    removeToken: () => void
    getAccessToken: () => TokenServiceTypes['accessToken'] | null
    getRefreshToken: () => TokenServiceTypes['refreshToken'] | null
}