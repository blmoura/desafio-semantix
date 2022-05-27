export interface DeleteFolder {
  deleteFolder: (id: string) => Promise<{data: string | null}>
}
