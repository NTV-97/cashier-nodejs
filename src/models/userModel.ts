import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export interface IUser {
  id: mongoose.Types.ObjectId;
  email?: string;
  username: string;
  password: string;
  type: 'admin' | 'staff' | 'manage';
  stallCode: string;
  adminId?: mongoose.Types.ObjectId;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: SchemaTypes.String,
      unique: true,
    },
    username: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: SchemaTypes.String,
      required: true,
    },
    type: {
      type: SchemaTypes.String,
      required: true,
    },
    adminId: {
      type: SchemaTypes.ObjectId,
    },
    stallCode: {
      type: SchemaTypes.String,
      unique: true,
      require: true,
    },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model('User', userSchema);
