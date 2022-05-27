import { createFilePath } from './paths/create-file'
import { createFolderPath } from './paths/create-folder'
import { deleteFolderPath } from './paths/delete-folder'

export default {
  '/api/folders': {
    ...createFolderPath,
    ...deleteFolderPath
  },
  '/api/files': {
    ...createFilePath
  }
}
