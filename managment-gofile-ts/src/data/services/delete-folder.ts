import { DeleteFolder } from '../../domain/usecases/delete-folder'
import { DeleteFolderRepository } from '../contracts/repositories/delete-folder-repository'

export class DeleteFolderService implements DeleteFolder {
  constructor (private readonly deleteFolderRepository: DeleteFolderRepository) {}

  async deleteFolder (id: string): Promise<{data: string | null}> {
    return await this.deleteFolderRepository.deleteFolder(id)
  }
}
