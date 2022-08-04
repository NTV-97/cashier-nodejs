import { ParamsCreateEditMenu } from './type';
import { MenuModel } from '@models';
import { Error } from '@config';
import { permissionMenu } from '@utils';

export const editMenu = async (
  _: any,
  { id, name, price, unit, type }: ParamsCreateEditMenu,
  context: { userId: string },
) => {
  await permissionMenu(id ?? '', context.userId);
  const response = await MenuModel.findByIdAndUpdate(
    id,
    {
      name,
      price,
      unit,
      type,
    },
    { upsert: true },
    (err, doc) => {
      if (err) throw new Error(`${err}`, '500');
    },
  );
  return response;
};
