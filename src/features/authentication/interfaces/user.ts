type userRoleTypes = 'ADMIN' | 'CUSTOMER'
export interface UserTypes {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  user_role: userRoleTypes
}

export interface UserMethodsInterface {
  setUser: (user: UserTypes) => void
  getUser: () => UserTypes | null
  removeUser: () => void
}
