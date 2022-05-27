import { Users } from '../entities/users'

export interface AddUser {
  add: (user: Users) => Promise<Users | null>
}
