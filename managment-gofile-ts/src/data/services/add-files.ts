import { AddFiles } from '../../domain/usecases/add-files'
import { AddFilesRepository } from '../contracts/repositories/add-files-repository'
import { FilesModel } from '../model/files'

export class AddFilesService implements AddFiles {
  constructor (private readonly addFilesRepository: AddFilesRepository) {}

  async add (id: string, name: string, folderId: string): Promise<FilesModel | null> {
    return await this.addFilesRepository.add(id, name, folderId)
  }
}
