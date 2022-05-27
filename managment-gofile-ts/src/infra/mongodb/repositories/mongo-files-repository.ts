import { FilesModel } from '../../../data/model/files'
import { AddFilesRepository } from '../../../data/contracts/repositories/add-files-repository'
import { FilesMongooseModel } from '../models/files'

export class MongoFilesRepository implements AddFilesRepository {
  filesModel = FilesMongooseModel

  async add (id: string, name: string, folderId: string): Promise<FilesModel | null> {
    return await this.filesModel.create({ _id: id, name, folderId })
  }
}
