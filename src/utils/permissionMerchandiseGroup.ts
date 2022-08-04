import { IMerchandiseGroup, IUser, MerchandiseGroupModel, UserModel } from '@models';
import { Error } from '@config';
import { Types } from 'mongoose';
import { Context } from '@types';

export const permissionMerchandiseGroup = async (
  merchandiseGroupId: Types.ObjectId,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo: IUser = await UserModel.findById(context.userId);
  const merchandiseInfo: IMerchandiseGroup = await MerchandiseGroupModel.findById(
    merchandiseGroupId,
  );
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  if (merchandiseInfo.stallCode !== context.stallCode) throw new Error('forbidden', '403');
  if (!merchandiseInfo._id) throw new Error('This menu do not exits', '404');
  return false;
};
