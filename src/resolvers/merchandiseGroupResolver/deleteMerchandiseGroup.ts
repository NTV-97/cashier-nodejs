import { MerchandiseGroupModel, IMerchandiseGroup } from '@models';
import { Context } from '@types';
import { permissionMerchandiseGroup } from '@utils';

export const deleteMerchandiseGroup = async (
  _: any,
  { _id }: IMerchandiseGroup,
  context: Context,
) => {
  await permissionMerchandiseGroup(_id, context);
  const res = await MerchandiseGroupModel.findByIdAndDelete(_id);
  if (res) {
    return {
      message: 'Delete successfully',
      success: true,
    };
  }
};
