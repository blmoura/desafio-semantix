import { Files } from '../entities/files'

export interface AddFiles {
  add: (id: string, name: string, folderId: string) => Promise<Files | null>
}
