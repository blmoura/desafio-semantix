import { FilesModel } from '../../model/files'

export interface AddFilesRepository {
  add: (id: string, name: string, folderId: string) => Promise<FilesModel | null>
}
