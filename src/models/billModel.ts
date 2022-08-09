import mongoose, { Types } from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';
import { OrderData } from './orderModel';

export interface IBill {
  id: Types.ObjectId;
  createdOrderAt: Date;
  tableId: Types.ObjectId;
  paymentAt?: Date;
  price: number;
  totalPrice: number;
  discount?: number;
  priceDiscount?: number;
  unitDiscount?: 'percent' | 'value';
  orderData: OrderData[];
  count: number;
  stallCode: string;
}

const billSchema = new Schema<IBill>(
  {
    tableId: {
      type: SchemaTypes.ObjectId,
      require: true,
    },
    paymentAt: {
      type: SchemaTypes.Date,
      require: true,
    },
    createdOrderAt: {
      type: SchemaTypes.Date,
      require: true,
    },
    price: {
      type: SchemaTypes.Number,
      require: true,
    },
    totalPrice: {
      type: SchemaTypes.Number,
      require: true,
    },
    discount: {
      type: SchemaTypes.Number,
    },
    priceDiscount: {
      type: SchemaTypes.Number,
    },
    unitDiscount: {
      type: SchemaTypes.String,
    },
    orderData: {
      type: SchemaTypes.Array,
      require: true,
    },
    stallCode: {
      type: SchemaTypes.String,
      require: true,
    },
    count: {
      type: SchemaTypes.Number,
      require: true,
    },
  },
  { timestamps: true },
);

export const BillModel = mongoose.model('Bill', billSchema);
