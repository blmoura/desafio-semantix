import { Folders } from '../../domain/entities/folders'
import { AddFolder } from '../../domain/usecases/add-folders'
import { AddFolderRepository } from '../contracts/repositories/add-folder-repository'

export class AddFolderService implements AddFolder {
  constructor (private readonly addFolderRepository: AddFolderRepository) {}

  async add (id: string, name: string): Promise<Folders | null> {
    return await this.addFolderRepository.add(id, name)
  }
}
