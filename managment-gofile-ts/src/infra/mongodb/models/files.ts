import { Document, model, Schema } from 'mongoose'

export interface IFiles extends Document {
  name: string
  folderId: string
}

const FilesSchema = new Schema<IFiles>({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  folderId: {
    type: String,
    required: true
  }
}, { _id: false })

export const FilesMongooseModel = model<IFiles>('Files', FilesSchema)
