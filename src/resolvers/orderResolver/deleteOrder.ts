import { OrderModel, IOrder } from '@models';
import { permissionOrder } from '@utils';
import { Context } from '@types';

export const deleteOrder = async (_: any, { id }: IOrder, context: Context) => {
  await permissionOrder(id, context);
  const res = await OrderModel.findByIdAndDelete(id);
  if (res) {
    return {
      message: 'Delete successfully',
      success: true,
    };
  }
};
