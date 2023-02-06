type UsersRoles = 'CUSTOMER' | 'ADMIN'
export interface UserTypes {
  username: string
  first_name: string
  last_name: string
  email: string
  user_role: UsersRoles
}
