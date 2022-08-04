import { UnitMerchandiseModel, IUnitMerchandise } from '@models';
import { Context } from '@types';
import { permissionMerchandise } from '@utils';

export const deleteUnitMerchandise = async (
  _: any,
  { _id }: IUnitMerchandise,
  context: Context,
) => {
  await permissionMerchandise(_id, context);
  const res = await UnitMerchandiseModel.findByIdAndDelete(_id);
  if (res) {
    return {
      message: 'Delete successfully',
      success: true,
    };
  }
};
