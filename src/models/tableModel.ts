import mongoose, { Types } from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export interface ITable {
  id: Types.ObjectId;
  tableCode: string;
  tableName: string;
  description?: string;
  used: boolean;
  stallCode: string;
}

const tableSchema = new Schema<ITable>(
  {
    tableCode: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    tableName: {
      type: SchemaTypes.String,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
    },
    used: {
      type: SchemaTypes.Boolean,
      require: true,
    },
    stallCode: {
      type: SchemaTypes.String,
      require: true,
    },
  },
  { timestamps: true },
);

export const TableModel = mongoose.model('Table', tableSchema);
