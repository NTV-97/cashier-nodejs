import { IMerchandise, MerchandiseModel } from '@models';
import { Error } from '@config';
import { permissionMerchandise, removeEmptyObject } from '@utils';
import { Context } from '@types';

export const editMerchandise = async (
  _: any,
  { _id, merchandiseCode, merchandiseName, description, group, type, unit, price }: IMerchandise,
  context: Context,
) => {
  await permissionMerchandise(_id, context);
  const data = {
    merchandiseCode,
    merchandiseName,
    description,
    group,
    type,
    unit,
    price,
  };
  const remove = removeEmptyObject(data);
  const response = await MerchandiseModel.findByIdAndUpdate(
    _id,
    remove,
    { upsert: true },
    (err, doc) => {
      if (err) throw new Error(`${err}`, '500');
    },
  );
  return response;
};
