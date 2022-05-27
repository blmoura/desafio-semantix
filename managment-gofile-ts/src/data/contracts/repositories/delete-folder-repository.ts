export interface DeleteFolderRepository {
  deleteFolder: (id: string) => Promise<{data: string | null}>
}
