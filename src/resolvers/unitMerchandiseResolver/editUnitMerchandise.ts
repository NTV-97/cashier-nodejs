import { IUnitMerchandise, UnitMerchandiseModel } from '@models';
import { Error } from '@config';
import { permissionUnitMerchandise, removeEmptyObject } from '@utils';
import { Context } from '@types';

export const editUnitMerchandise = async (
  _: any,
  { _id, unitCode, unitName, description }: IUnitMerchandise,
  context: Context,
) => {
  await permissionUnitMerchandise(_id, context);
  const data = {
    unitCode,
    unitName,
    description,
  };
  const remove = removeEmptyObject(data);
  const response = await UnitMerchandiseModel.findByIdAndUpdate(
    _id,
    remove,
    { upsert: true },
    (err, doc) => {
      if (err) throw new Error(`${err}`, '500');
    },
  );
  return response;
};
