import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    adminId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const MenuModel = mongoose.model('Menu', menuSchema);
