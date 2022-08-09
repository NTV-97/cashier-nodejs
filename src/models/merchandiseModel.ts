import mongoose, { Types } from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export type TypeMerchandise = 'merchandise' | 'finished' | 'materials';
export interface IMerchandise {
  _id: Types.ObjectId;
  merchandiseCode: string;
  merchandiseName: string;
  description?: string;
  unit: string;
  group: string;
  type: TypeMerchandise;
  price?: number;
  stallCode: string;
}

const merchandiseSchema = new Schema<IMerchandise>(
  {
    merchandiseCode: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    merchandiseName: {
      type: SchemaTypes.String,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
    },
    unit: {
      type: SchemaTypes.String,
      require: true,
    },
    group: {
      type: SchemaTypes.String,
      require: true,
    },
    type: {
      type: SchemaTypes.String,
      require: true,
    },
    price: {
      type: SchemaTypes.Number,
    },
    stallCode: {
      type: SchemaTypes.String,
      require: true,
    },
  },
  { timestamps: true },
);

export const MerchandiseModel = mongoose.model('Merchandise', merchandiseSchema);
