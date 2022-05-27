import { AddFolderRepository } from '../../../data/contracts/repositories/add-folder-repository'
import { DeleteFolderRepository } from '../../../data/contracts/repositories/delete-folder-repository'
import { FoldersModel } from '../../../data/model/folders'
import { FoldersMongooseModel } from '../models/folder'

export class MongoFolderRepository implements AddFolderRepository, DeleteFolderRepository {
  foldersModel = FoldersMongooseModel

  async add (id: string, name: string): Promise<FoldersModel | null> {
    return await this.foldersModel.create({ _id: id, name })
  }

  async deleteFolder (id: string): Promise<{data: string | null}> {
    const folder = await this.foldersModel.findOne({ _id: id })
    if (!folder) {
      return {
        data: null
      }
    }

    await this.foldersModel.findOneAndDelete({ _id: id })

    return {
      data: 'Folder successfully deleted'
    }
  }
}
