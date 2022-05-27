import { UsersMongooseModel } from './../model/user'
import { Users } from '../../../../domain/entities/users'
import { AddUserRepository } from '../../../../data/protocols/add-user-repository'

export class MongoUserRepository implements AddUserRepository {
  usersModel = UsersMongooseModel

  async add (user: Users): Promise<Users | null> {
    const userAlreadyExists = await this.usersModel.findById(user._id).exec()
    if (userAlreadyExists) {
      return null
    }
    return await this.usersModel.create(user)
  }
}
