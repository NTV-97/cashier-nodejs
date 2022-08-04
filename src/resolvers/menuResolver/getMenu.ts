import { MenuModel } from '@models';
import { Error } from '@config';

export const getMenu = async (_: any, { id }: { id: any }, context: { userId: string }) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  return MenuModel.findById(id);
};

export const getMenus = async (_: any, _params: undefined, context: { userId: string }) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  return MenuModel.find({ adminId: context.userId });
};
