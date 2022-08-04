import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export interface IArea {
  areaCode: string;
  areaName: string;
  description?: string;
  used: boolean;
  stallCode: string;
}

const areaSchema = new Schema<IArea>(
  {
    areaCode: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    areaName: {
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
      type: SchemaTypes.Boolean,
      require: true,
    },
  },
  { timestamps: true },
);

export const AreaModel = mongoose.model('Area', areaSchema);
