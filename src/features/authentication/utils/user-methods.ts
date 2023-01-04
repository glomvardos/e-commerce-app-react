import { UserMethodsInterface, UserTypes } from '../index'

class UserMethods implements UserMethodsInterface {
  public setUser(user: UserTypes): void {
    localStorage.setItem('user', JSON.stringify(user))
  }

  public getUser(): UserTypes | null {
    const user = localStorage.getItem('user')
    return user ? (JSON.parse(user) as UserTypes) : null
  }

  public removeUser(): void {
    localStorage.removeItem('user')
  }
}

export default new UserMethods()
