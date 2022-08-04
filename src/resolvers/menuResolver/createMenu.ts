import { ParamsCreateEditMenu } from './type';
import { MenuModel } from '@models';
import { Error } from '@config';

export const createMenu = async (
  _: any,
  { name, price, unit, type }: ParamsCreateEditMenu,
  context: { userId: string },
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const adminId = context.userId;
  const menu = new MenuModel({ name, price, unit, adminId, type });
  await menu.save();
  return 'new menu successfully created';
};
