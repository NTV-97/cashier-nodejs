import { OrderModel, IOrder, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';
import { reduceOrderData } from '@utils';

export const createOrder = async (_: any, { tableId, orderData }: IOrder, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  const _checkOrder: IOrder = await OrderModel.findOne({ tableId });
  if (_checkOrder?.tableId === tableId) {
    throw new Error(`Table already used`, '409');
  }
  const { orderData: currentOrderData, reduceOrderData: currentReduceOrderData } =
    await reduceOrderData(orderData);

  const Order = new OrderModel({
    tableId,
    orderData: currentOrderData,
    price: currentReduceOrderData.totalPrice,
    totalPrice: currentReduceOrderData.totalPrice,
    stallCode: context.stallCode,
    count: currentReduceOrderData.count,
  });
  await Order.save();
  return {
    message: `Order successfully created`,
    success: true,
  };
};
