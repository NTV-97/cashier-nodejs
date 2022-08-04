import { MenuModel, UserModel } from '@models';
import { Error } from '@config';

export const permissionMenu = async (menuId: string, userId: string) => {
  if (!userId) throw new Error('unauthorized', '401');
  const userInfo = await UserModel.findById(userId);
  const menuInfo = await MenuModel.findById(menuId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  if (!menuInfo?._id) throw new Error('This menu do not exits', '404');
  if (menuInfo?.adminId != userId) throw new Error('forbidden', '403');
  return false;
};
