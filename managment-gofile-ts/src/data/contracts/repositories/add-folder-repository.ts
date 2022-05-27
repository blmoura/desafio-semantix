import { Folders } from '../../../domain/entities/folders'

export interface AddFolderRepository {
  add: (id: string, name: string) => Promise<Folders | null>
}
