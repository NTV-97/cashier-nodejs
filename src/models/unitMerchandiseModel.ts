import mongoose, { Types } from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export interface IUnitMerchandise {
  _id: Types.ObjectId;
  unitCode: string;
  unitName: string;
  description?: string;
  stallCode: string;
}

const unitMerchandiseSchema = new Schema<IUnitMerchandise>(
  {
    unitCode: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    unitName: {
      type: SchemaTypes.String,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
    },
    stallCode: {
      type: SchemaTypes.String,
      require: true,
    },
  },
  { timestamps: true },
);

export const UnitMerchandiseModel = mongoose.model('UnitMerchandise', unitMerchandiseSchema);
