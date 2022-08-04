import { MerchandiseModel, IMerchandise } from '@models';
import { Context } from '@types';
import { permissionMerchandise } from '@utils';

export const deleteMerchandise = async (_: any, { _id }: IMerchandise, context: Context) => {
  await permissionMerchandise(_id, context);
  const res = await MerchandiseModel.findByIdAndDelete(_id);
  if (res) {
    return {
      message: 'Delete successfully',
      success: true,
    };
  }
};
