import { BillModel, IBill, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const saveBill = async (
  _: any,
  {
    createdOrderAt,
    tableId,
    paymentAt,
    price,
    totalPrice,
    discount,
    priceDiscount,
    unitDiscount,
    orderData,
    count,
  }: IBill,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  const Bill = new BillModel({
    createdOrderAt,
    tableId,
    paymentAt,
    price,
    totalPrice,
    discount,
    priceDiscount,
    unitDiscount,
    orderData,
    count,
    stallCode: context.stallCode,
  });
  await Bill.save();
  return {
    message: `Bill successfully save`,
    success: true,
  };
};
