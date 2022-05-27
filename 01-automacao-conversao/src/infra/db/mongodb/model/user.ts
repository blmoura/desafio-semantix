import { Document, model, Schema } from 'mongoose'

export interface IUser extends Document {
  fullName: string
  email: string
  address: string
  addressNumber: number
  phoneNumber: string
}

const UsersSchema = new Schema<IUser>({
  _id: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  addressNumber: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
}, { _id: false })

export const UsersMongooseModel = model<IUser>('Users', UsersSchema)
