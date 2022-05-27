import { Users } from '../../domain/entities/users'
import { AddUser } from '../../domain/usecases/add-user'
import { AddUserRepository } from '../protocols/add-user-repository'

export class DbAddUser implements AddUser {
  constructor (private readonly addUserRepository: AddUserRepository) {}

  async add (user: Users): Promise<Users | null> {
    return await this.addUserRepository.add(user)
  }
}
