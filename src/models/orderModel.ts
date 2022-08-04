import mongoose, { Types } from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export type OrderData = {
  id: Types.ObjectId;
  count: number;
  price: number;
  name: string;
  unit: string;
  totalPrice: number;
};

export interface IOrder {
  id: Types.ObjectId;
  createdAt: Date;
  tableId: Types.ObjectId;
  paymentAt?: Date;
  price: number;
  totalPrice: number;
  discount?: number;
  priceDiscount?: number;
  unitDiscount?: 'percent' | 'value';
  orderData: OrderData[];
  stallCode: string;
  count: number;
}

const orderSchema = new Schema<IOrder>(
  {
    tableId: {
      type: SchemaTypes.ObjectId,
      require: true,
    },
    paymentAt: {
      type: SchemaTypes.Date,
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

export const OrderModel = mongoose.model('Order', orderSchema);
