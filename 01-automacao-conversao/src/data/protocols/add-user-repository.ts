import { Users } from '../../domain/entities/users'

export interface AddUserRepository {
  add: (user: Users) => Promise<Users | null>
}
