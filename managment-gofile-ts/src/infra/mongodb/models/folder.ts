import { Document, model, Schema } from 'mongoose'

export interface IFolders extends Document {
  name: string
}

const FoldersSchema = new Schema<IFolders>({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, { _id: false })

export const FoldersMongooseModel = model<IFolders>('Folders', FoldersSchema)
