import { Folders } from '../entities/folders'

export interface AddFolder {
  add: (id: string, name: string) => Promise<Folders | null>
}
