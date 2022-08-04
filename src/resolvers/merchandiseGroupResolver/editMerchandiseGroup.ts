import { IMerchandiseGroup, MerchandiseGroupModel } from '@models';
import { Error } from '@config';
import { permissionMerchandiseGroup, removeEmptyObject } from '@utils';
import { Context } from '@types';

export const editMerchandiseGroup = async (
  _: any,
  { _id, merchandiseGroupCode, merchandiseGroupName, description }: IMerchandiseGroup,
  context: Context,
) => {
  await permissionMerchandiseGroup(_id, context);
  const data = {
    merchandiseGroupCode,
    merchandiseGroupName,
    description,
  };
  const remove = removeEmptyObject(data);
  const response = await MerchandiseGroupModel.findByIdAndUpdate(
    _id,
    remove,
    { upsert: true },
    (err, doc) => {
      if (err) throw new Error(`${err}`, '500');
    },
  );
  return response;
};
